<script lang="ts">
  import { slide } from 'svelte/transition';

  export let onNext: () => void;
  export let isLastCard: boolean;
  export let labelNext: string;
  export let labelFinish: string;
  export let subText: string | undefined = undefined;
</script>

<div 
  class="p-4 bg-black"
  transition:slide={{ duration: 300 }}
>
  <button
    on:click={onNext}
    class="w-full px-4 py-3 bg-orange-500 text-white rounded-xl
           hover:bg-orange-600 transition-colors font-medium shadow-sm"
  >
    {isLastCard ? labelFinish : labelNext}
  </button>
  
  {#if !isLastCard && subText}
    <p class="text-center text-sm text-black mt-2">
      {subText}
    </p>
  {/if}
</div>