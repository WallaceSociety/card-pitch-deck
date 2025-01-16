<script lang="ts">
  import { onMount } from 'svelte';
  import type { ChecklistAnimationCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  import ChecklistItem from '../checklist/ChecklistItem.svelte';
  
  export let card: ChecklistAnimationCard;
  export let onNext: () => void;
  export let isLastCard = false;

  let visibleItems: number = 0;
  let highlightedItem: number = -1;
  let completedItems = new Set<number>();
  let audio: HTMLAudioElement;
  let isPlaying = false;

  const REVEAL_DELAY = 1000;
  const HIGHLIGHT_DELAY = 500;

  async function revealItems() {
    // First reveal all items
    for (let i = 0; i < card.items.length; i++) {
      visibleItems = i + 1;
      await new Promise(resolve => setTimeout(resolve, REVEAL_DELAY));
    }

    // Then highlight and play audio for each item
    for (let i = 0; i < card.items.length; i++) {
      highlightedItem = i;
      
      if (card.items[i].audio) {
        isPlaying = true;
        audio.src = card.items[i].audio;
        await audio.play();
        await new Promise(resolve => {
          audio.onended = resolve;
        });
        isPlaying = false;
      } else {
        await new Promise(resolve => setTimeout(resolve, HIGHLIGHT_DELAY));
      }
      
      completedItems = new Set([...completedItems, i]);
      highlightedItem = -1;
    }
  }

  onMount(() => {
    revealItems();
  });
</script>

<CardWrapper>
  <div class="flex flex-col h-full bg-gray-50">
    <div class="flex-1 p-6">
      <h2 class="text-2xl font-semibold mb-2">{card.title}</h2>
      {#if card.description}
        <p class="text-gray-600 mb-8">{card.description}</p>
      {/if}
      
      <div class="space-y-4">
        {#each card.items as item, index}
          {#if index < visibleItems}
            <ChecklistItem
              {item}
              isHighlighted={highlightedItem === index}
              isCompleted={completedItems.has(index)}
            />
          {/if}
        {/each}
      </div>
    </div>

    {#if completedItems.size === card.items.length}
      <div class="p-4 mt-auto bg-white border-t">
        <button
          on:click={onNext}
          class="w-full px-4 py-3 bg-green-600 text-white rounded-xl 
                 hover:bg-green-700 transition-colors font-medium shadow-sm"
        >
          {isLastCard ? card.cta.labelFinish : card.cta.labelNext}
        </button>
      </div>
    {/if}
  </div>
</CardWrapper>

<audio bind:this={audio} preload="auto"></audio>