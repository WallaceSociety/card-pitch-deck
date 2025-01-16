<script lang="ts">
  import type { ImageCarouselCard } from "../../types/CardTypes";
  import CardWrapper from "../CardWrapper.svelte";

  export let card: ImageCarouselCard;
  export let onNext: () => void;
  export let isLastCard = false;

  let currentIndex = 0;

  $: objectFit = card.objectFit || "cover";
  $: backgroundColor = card.backgroundColor || "transparent";

  // Swipe handling variables
  let touchStartX = 0;
  let touchEndX = 0;
  const SWIPE_THRESHOLD = 50;

  function goToPrevious() {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }

  function goToNext() {
    if (currentIndex < card.images.length - 1) {
      currentIndex++;
    }
  }

  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event: TouchEvent) {
    touchEndX = event.touches[0].clientX;
  }

  function handleTouchEnd() {
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > SWIPE_THRESHOLD && currentIndex > 0) {
      goToPrevious();
    } else if (swipeDistance < -SWIPE_THRESHOLD && currentIndex < card.images.length - 1) {
      goToNext();
    }

    touchStartX = 0;
    touchEndX = 0;
  }
</script>

<CardWrapper>
  <div
    class="h-full overflow-x-auto scrollbar-hide relative"
    on:touchstart={handleTouchStart}
    on:touchmove={handleTouchMove}
    on:touchend={handleTouchEnd}
  >
    <!-- Carousel Images -->
    <div
      class="flex h-full transition-transform"
      style="transform: translateX(-{currentIndex * (85 + 2)}%)"
    >
      {#each card.images as image, i}
        <div class="h-full min-w-[85%] flex-shrink-0 px-1 ">
          <div
            class="relative h-full rounded-lg overflow-hidden"
            style="background-color: {backgroundColor}"
          >
            <img
              src={image}
              alt="Carousel image"
              class="h-full w-full"
              style="object-fit: {objectFit}"
              class:grayscale={i === card.images.length - 1}
            />

            <!-- CTA Button for Last Image -->
            {#if i === card.images.length - 1}
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                <button
                  on:click={onNext}
                  class="px-8 py-4 bg-green-600 text-white rounded-xl
                         hover:bg-green-700 transition-colors font-medium shadow-lg text-lg"
                >
                  {isLastCard ? card.cta.labelFinish : card.cta.labelNext}
                </button>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <!-- Left Navigation Button (Desktop Only) -->
    <button
      class="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-200 hover:text-white rounded-full transition"
      on:click={goToPrevious}
      disabled={currentIndex === 0}
      aria-label="Previous Image"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <!-- Right Navigation Button (Desktop Only) -->
    <button
      class="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-200 hover:text-white rounded-full transition"
      on:click={goToNext}
      disabled={currentIndex === card.images.length - 1}
      aria-label="Next Image"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</CardWrapper>

<style>
  .scroll-container {
    scroll-snap-type: x mandatory;
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none; /* Hide scrollbars for IE and Edge */
    scrollbar-width: none; /* Hide scrollbars for Firefox */
  }

  .scroll-container::-webkit-scrollbar {
    display: none; /* Hide scrollbars for Chrome, Safari, and Edge */
  }

  .card-container {
    scroll-snap-align: start; /* Snap the card to the start */
    padding-right: 1rem; /* Add spacing for visibility */
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>
