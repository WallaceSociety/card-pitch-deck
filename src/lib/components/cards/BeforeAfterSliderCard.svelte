<script lang="ts">
  import type { BeforeAfterSliderCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  import ImageSlider from '../slider/ImageSlider.svelte';
  import SliderOverlay from '../slider/SliderOverlay.svelte';
  
  export let card: BeforeAfterSliderCard;
  export let onNext: () => void;
  export let isLastCard = false;

  let showOverlay = false;

  function handleContinue() {
    showOverlay = true;
  }
</script>

<CardWrapper>
  <div class="flex flex-col h-full relative">
    <div class="flex-1">
      <ImageSlider
        beforeImage={card.imageBefore}
        afterImage={card.imageAfter}
        startPosition={card.startPosition}
      />
    </div>
    
    {#if !showOverlay}
      <div class="p-4">
        <button
          on:click={handleContinue}
          class="w-full px-4 py-3 bg-white text-black rounded-md
                 hover:bg-white/90 transition-colors font-medium"
        >
          Continue
        </button>
      </div>
    {/if}

    {#if showOverlay}
      <SliderOverlay
        buttons={card.buttons}
        cardKey={card.key}
        title={card.title}
        {onNext}
        {isLastCard}
      />
    {/if}
  </div>
</CardWrapper>