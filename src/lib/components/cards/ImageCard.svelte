<script lang="ts">
  import type { ImageCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  
  export let card: ImageCard;
  export let onNext: () => void;
  
  $: objectFit = card.objectFit || 'cover';
</script>

<CardWrapper>
  <div class="relative h-full flex flex-col">
    <div class="flex-1 relative">
      <img
        src={card.src}
        alt="Card image"
        class="absolute inset-0 w-full h-full"
        style="object-fit: {objectFit}"
      />
    </div>
    
    <div class="p-4">
      <button
        on:click={onNext}
        class="w-full px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium shadow-sm"
      >
        {card.cta.labelNext}
      </button>
    </div>
  </div>
</CardWrapper>