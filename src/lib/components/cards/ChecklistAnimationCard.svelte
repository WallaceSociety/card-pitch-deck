<script lang="ts">
  import { onMount } from 'svelte';
  import type { ChecklistAnimationCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  import ChecklistItem from '../checklist/ChecklistItem.svelte';
  import CardCta from '../cta/CardCta.svelte';

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
      await new Promise((resolve) => setTimeout(resolve, REVEAL_DELAY));
    }

    // Then highlight and play audio for each item
    for (let i = 0; i < card.items.length; i++) {
      highlightedItem = i;

      if (card.items[i].audio) {
        isPlaying = true;
        audio.src = card.items[i].audio;
        await audio.play();
        await new Promise((resolve) => {
          audio.onended = resolve;
        });
        isPlaying = false;
      } else {
        await new Promise((resolve) => setTimeout(resolve, HIGHLIGHT_DELAY));
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
      <h2 class="mb-2 text-2xl font-semibold">{card.title}</h2>
      {#if card.description}
        <p class="mb-8 text-gray-600">{card.description}</p>
      {/if}

      <div class="space-y-4">
        {#each card.items as item, index}
          {#if index < visibleItems}
            <ChecklistItem {item} isHighlighted={highlightedItem === index} isCompleted={completedItems.has(index)} />
          {/if}
        {/each}
      </div>
    </div>

    {#if completedItems.size === card.items.length}
      <CardCta {onNext} {isLastCard} labelNext={card.cta.labelNext} labelFinish={card.cta.labelFinish} subText={card.cta.subText} />
    {/if}
  </div>
</CardWrapper>

<audio bind:this={audio} preload="auto"></audio>
