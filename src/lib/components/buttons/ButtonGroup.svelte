<script lang="ts">
  import type { Button } from '../../types/CardTypes';
  import ActionButton from './ActionButton.svelte';
  import { cardStore } from '../../stores/cardStore';
  
  export let buttons: Button[];
  export let onNext: () => void;
  export let isLastCard: boolean;
  export let ctaLabel: string;
  export let cardKey: string;
  
  let checkedButtons: Set<string>;
  
  cardStore.subscribe(store => {
    const cardInteractions = store[cardKey] || [];
    checkedButtons = new Set(cardInteractions.map(b => b.value));
  });
</script>

<div class="flex flex-col gap-3">
  {#each buttons as button}
    <ActionButton
      {button}
      {cardKey}
      checked={checkedButtons?.has(button.value)}
      on:click
    />
  {/each}
  
  <button
    on:click={onNext}
    class="w-full px-4 py-3 bg-green-600 text-white rounded-xl 
           hover:bg-green-700 transition-colors font-medium shadow-sm"
  >
    {ctaLabel}
  </button>
</div>