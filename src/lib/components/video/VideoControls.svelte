<script lang="ts">
  export let isPlaying: boolean;
  
  function getPlayIcon() {
    return isPlaying 
      ? '⏸️' 
      : '▶️';
  }
</script>

<button 
  class="absolute inset-0 w-full h-full bg-black/20 flex items-center justify-center"
  on:click
>
  <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
    <span class="text-4xl">{getPlayIcon()}</span>
  </div>
</button>