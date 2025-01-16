<script lang="ts">
  import CardViewer from './lib/components/CardViewer.svelte';
  import CardNavigation from './lib/components/navigation/CardNavigation.svelte';
  import ResultsView from './lib/components/results/ResultsView.svelte';
  import { cardStore } from './lib/stores/cardStore';
  import type { CardResult } from './lib/types/CardTypes';
  import { cards } from './lib/data/cards';

  let currentIndex = 0;
  let showResults = false;
  let results: CardResult[] = [];

  function handleNavigate(index: number) {
    currentIndex = index;
  }

  function handleFinish() {
    results = cardStore.getResults(cards);
    showResults = true;
  }
</script>

{#if !showResults}
  <CardViewer 
    {cards} 
    bind:currentIndex 
    on:finish={handleFinish}
  />
  <CardNavigation
    {currentIndex}
    totalCards={cards.length}
    onNavigate={handleNavigate}
  />
{:else}
  <ResultsView {results} />
{/if}