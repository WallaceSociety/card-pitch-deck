<script lang="ts">
  export let currentIndex: number;
  export let totalCards: number;
  export let onNavigate: (index: number) => void;
</script>

<div class="hidden md:flex gap-2 justify-center mt-4">
  {#each Array(totalCards) as _, index}
    <button
      class="px-4 py-2 rounded-lg {currentIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}"
      on:click={() => onNavigate(index)}
    >
      {index + 1}
    </button>
  {/each}
</div>