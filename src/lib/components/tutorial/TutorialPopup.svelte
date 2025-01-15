<script lang="ts">
  import { fly } from 'svelte/transition';
  
  export let content: string;
  export let x: number;
  export let y: number;
</script>

<div
  class="popup-content absolute z-10 max-w-xs bg-white rounded-lg shadow-lg p-4"
  style="left: {x}px; top: {y + 20}px"
  in:fly={{ y: -10, duration: 200 }}
>
  <p class="text-sm text-gray-700">{content}</p>
</div>