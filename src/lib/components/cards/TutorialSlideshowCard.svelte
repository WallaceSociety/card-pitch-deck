<script lang="ts">
  import { onMount } from 'svelte';
  import type { TutorialSlideshowCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  import TutorialSlide from '../tutorial/TutorialSlide.svelte';
  import { tutorialStore } from '../../stores/tutorialStore';
  
  export let card: TutorialSlideshowCard;
  export let onNext: () => void;
  export let isLastCard = false;

  let currentSlideIndex = 0;
  let showCta = false;
  
  // Reactive variables
  $: currentSlide = card?.slides?.[currentSlideIndex];
  $: isLastSlide = currentSlideIndex === card?.slides?.length - 1;
  
  // State tracking whether all points are clicked for the current slide
  $: allPointsClicked = currentSlide?.points
    ? currentSlide.points.every(p => $tutorialStore.points[`${currentSlideIndex}-${p.x}-${p.y}`])
    : false;

  function handlePointClick() {
    if (allPointsClicked) {
      if (isLastSlide) {
        showCta = true; // Show CTA on last slide
      } else {
        // Wait for the current slide to complete before moving to the next
        if (currentSlideIndex < card.slides.length - 1) {
          currentSlideIndex++; // Only increment if the current slide is complete
        }
      }
    }
  }

  function handleNext() {
    // Proceed to the next tutorial card (after completing the current one)
    onNext();
  }
</script>

<CardWrapper>
  <div class="relative h-full">
    <TutorialSlide
      slide={currentSlide}
      {allPointsClicked}
      slideIndex={currentSlideIndex}
      on:pointClick={handlePointClick}
      on:complete={handlePointClick}
    />

    {#if showCta}
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <button
          on:click={handleNext}
          class="w-full px-4 py-3 bg-white text-black rounded-md hover:bg-white/90 transition-colors font-medium"
        >
          {isLastCard ? card.cta.labelFinish : card.cta.labelNext}
        </button>
      </div>
    {/if}
  </div>
</CardWrapper>
