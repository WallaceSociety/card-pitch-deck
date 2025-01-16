<script lang="ts">
  import type { CardResult } from '../../types/CardTypes';
  
  export let results: CardResult[];
</script>

<div class="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
  <div class="w-full max-w-[600px] bg-white rounded-lg shadow-lg p-6">
    <h2 class="text-2xl font-bold mb-6">Results Summary</h2>
    
    <div class="space-y-6">
      {#each results as result}
        <div class="border-b pb-4">
          <h3 class="font-semibold text-lg mb-2">{result.displayKey}</h3>
          {#if result.checkedButtons.length > 0}
            <ul class="space-y-2">
              {#each result.checkedButtons as button}
                <li class="flex items-center text-gray-700">
                  <span class="mr-2">✓</span>
                  <span class="font-medium">{button.label}:</span>
                  <span class="ml-2 text-gray-600">{button.value}</span>
                </li>
              {/each}
            </ul>
          {:else}
            <p class="text-gray-500 italic">No selections made</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>