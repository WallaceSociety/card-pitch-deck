<script lang="ts">
  import type { ImageCarouselCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  
  export let card: ImageCarouselCard;
  export let onNext: () => void;
  export let isLastCard = false;

  $: objectFit = card.objectFit || 'cover';
  $: backgroundColor = card.backgroundColor || 'transparent';
</script>

<CardWrapper>
  <div class="h-full overflow-x-auto scrollbar-hide">
    <div class="flex h-full">
      {#each card.images as image, i}
        <div class="h-full min-w-[85%] flex-shrink-0 px-1">
          <div class="relative h-full rounded-lg overflow-hidden" style="background-color: {backgroundColor}">
            <img
              src={image}
              alt="Carousel image"
              class="h-full w-full"
              style="object-fit: {objectFit}"
              class:grayscale={i === card.images.length - 1}
            />
            
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
  </div>
</CardWrapper>

<style>
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>