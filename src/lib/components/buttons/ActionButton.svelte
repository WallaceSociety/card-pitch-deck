<script lang="ts">
  import type { Button } from '../../types/CardTypes';
  import { cardStore } from '../../stores/cardStore';
  import { createEventDispatcher } from 'svelte';
  
  export let button: Button;
  export let checked = false;
  export let cardKey: string;
  
  const dispatch = createEventDispatcher();
  let audio: HTMLAudioElement;
  
  function handleClick() {
    cardStore.addInteraction(cardKey, button);
    
    switch (button.action) {
      case 'link':
        window.open(button.detail, '_blank', 'noopener,noreferrer');
        break;
      case 'sound':
        if (audio) {
          audio.currentTime = 0;
          audio.play();
        }
        break;
    }
    dispatch('click');
  }
</script>

<button
  on:click={handleClick}
  class="w-full px-4 py-3 rounded-md transition-colors text-center font-medium shadow-sm
         {checked 
           ? 'bg-blue-700 text-white' 
           : 'bg-blue-600 text-white hover:bg-blue-700'}"
>
  <div class="flex items-center justify-between">
    <span>{button.label}</span>
    {#if checked}
      <span class="text-lg">✓</span>
    {/if}
  </div>
</button>

{#if button.action === 'sound'}
  <audio 
    bind:this={audio}
    src={button.detail}
    preload="auto"
  ></audio>
{/if}