<script lang="ts">
  export let currentIndex: number;
  export let total: number;
</script>

<div class="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
  {#each Array(total) as _, i}
    <div 
      class="w-2 h-2 rounded-full transition-colors duration-200 
        {currentIndex === i ? 'bg-white' : 'bg-white/50'}"
    />
  {/each}
</div>