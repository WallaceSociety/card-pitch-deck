<script lang="ts">
  import { slide } from 'svelte/transition';
  import type { Button } from '../../types/CardTypes';
  import { cardStore } from '../../stores/cardStore';
  import CardCta from '../cta/CardCta.svelte';

  export let buttons: Button[];
  export let onNext: () => void;
  export let isLastCard: boolean;
  export let cardKey: string;
  export let title: string;
  export let labelNext: string;
  export let labelFinish: string;
  export let subText: string | undefined = undefined;

  let checkedButtons: Set<string>;

  cardStore.subscribe((store) => {
    const cardInteractions = store[cardKey] || [];
    checkedButtons = new Set(cardInteractions.map((b) => b.value));
  });
</script>

<div class="absolute inset-0 bg-black/80" transition:slide={{ duration: 300 }}>
  <div class="flex flex-col h-full p-8 overflow-y-auto">
    <h2 class="mb-8 text-2xl font-semibold leading-tight text-white">{title}</h2>

    <div class="flex-1 custom-scrollbar">
      <div class="flex flex-col gap-4">
        {#each buttons as button}
          <button on:click={() => cardStore.toggleInteraction(cardKey, button)} class="p-6 text-left transition-all duration-200 border-2 rounded-md {checkedButtons?.has(button.value) ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/30 hover:border-white'}">
            <p class="text-lg leading-relaxed">{button.label}</p>
          </button>
        {/each}
      </div>
    </div>

    <div class="mt-8">
      <CardCta {onNext} {isLastCard} {labelNext} {labelFinish} {subText} />
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
