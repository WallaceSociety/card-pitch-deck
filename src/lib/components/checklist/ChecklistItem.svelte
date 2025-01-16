<script lang="ts">
  import type { ChecklistItem } from '../../types/CardTypes';
  import { fade, fly } from 'svelte/transition';
  
  export let item: ChecklistItem;
  export let isHighlighted = false;
  export let isCompleted = false;
</script>

<div
  class="p-4 rounded-lg transition-all duration-300 bg-white"
  class:shadow-md={isHighlighted}
  class:border-l-4={isCompleted}
  class:border-green-500={isCompleted}
  in:fly={{ y: 20, duration: 300 }}
>
  <div class="flex items-center gap-4">
    <div 
      class="w-6 h-6 flex items-center justify-center
             transition-all duration-300 relative"
    >
      {#if isCompleted}
        <div 
          class="absolute -inset-1"
          in:fade={{ duration: 200 }}
        >
          <svg class="w-8 h-8 text-green-500" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" class="fill-current opacity-20"/>
            <path 
              d="M10 16l4 6 18-18" 
              stroke="currentColor" 
              stroke-width="6" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
        </div>
      {:else}
        <div class="w-5 h-5 rounded-full border-2 transition-colors duration-300"
             class:border-blue-400={isHighlighted}
             class:border-gray-300={!isHighlighted}
        />
      {/if}
    </div>
    
    <span class="text-lg text-gray-700">{item.label}</span>
  </div>
</div>