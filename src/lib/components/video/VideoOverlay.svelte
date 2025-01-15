<script lang="ts">
  import { slide } from 'svelte/transition';
  import type { Button } from '../../types/CardTypes';
  import { cardStore } from '../../stores/cardStore';
  
  export let buttons: Button[];
  export let onNext: () => void;
  export let isLastCard: boolean;
  export let cardKey: string;
  export let title: string;
  
  let checkedButtons: Set<string>;
  
  cardStore.subscribe(store => {
    const cardInteractions = store[cardKey] || [];
    checkedButtons = new Set(cardInteractions.map(b => b.value));
  });
</script>

<div 
  class="absolute inset-0 bg-black/80"
  transition:slide={{ duration: 300 }}
>
  <div class="h-full flex flex-col p-8 overflow-y-auto">
    <h2 class="text-2xl font-semibold text-white mb-8 leading-tight">{title}</h2>
    
    <div class="flex-1 custom-scrollbar">
      <div class="flex flex-col gap-4">
        {#each buttons as button}
          <button
            on:click={() => cardStore.toggleInteraction(cardKey, button)}
            class="p-6 text-left transition-all duration-200 border-2 rounded-md
                   {checkedButtons?.has(button.value) 
                     ? 'bg-white text-black border-white' 
                     : 'bg-transparent text-white border-white/30 hover:border-white'}"
          >
            <p class="text-lg leading-relaxed">{button.label}</p>
          </button>
        {/each}
      </div>
    </div>
    
    <div class="mt-8">
      <button
        on:click={onNext}
        class="w-full px-4 py-3 bg-white text-black rounded-md
               hover:bg-white/90 transition-colors font-medium"
      >
        {isLastCard ? 'Finish' : 'Next'}
      </button>
    </div>
  </div>
</div>

<style>
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
</style>