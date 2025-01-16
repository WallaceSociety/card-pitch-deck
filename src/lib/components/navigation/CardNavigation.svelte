<script lang="ts">
  export let currentIndex: number;
  export let totalCards: number;
  export let onNavigate: (index: number) => void;
</script>

<div class="hidden md:flex lg:flex gap-2 justify-center pt-4 bg-gray-100">
  {#each Array(totalCards) as _, index}
    <button
      class="px-4 py-2 rounded-lg {currentIndex === index ? 'bg-blue-400 text-white' : 'bg-white hover:bg-gray-300'}"
      on:click={() => onNavigate(index)}
    >
      {index + 1}
    </button>
  {/each}
</div>