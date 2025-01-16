<script lang="ts">
  export let src: string;
  export let isLast = false;
  export let onNext: (() => void) | undefined = undefined;
  export let ctaLabel = '';
</script>

<div class="h-full min-w-full snap-start">
  <div class="relative h-full">
    <img
      {src}
      alt="Carousel image"
      class="h-full w-full object-cover"
      class:grayscale={isLast}
    />
    
    {#if isLast}
      <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
        <button
          on:click={onNext}
          class="px-8 py-4 bg-green-600 text-white rounded-xl 
                 hover:bg-green-700 transition-colors font-medium shadow-lg text-lg"
        >
          {ctaLabel}
        </button>
      </div>
    {/if}
  </div>
</div>