<script lang="ts">
  import { onMount } from 'svelte';
  
  export let beforeImage: string;
  export let afterImage: string;
  export let startPosition: number = 50;
  
  let container: HTMLDivElement;
  let slider: HTMLDivElement;
  let isDragging = false;
  
  function handleMouseDown() {
    isDragging = true;
  }
  
  function handleMouseUp() {
    isDragging = false;
  }
  
  function handleMouseMove(event: MouseEvent) {
    if (!isDragging) return;
    
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    slider.style.left = `${percentage}%`;
  }
  
  onMount(() => {
    slider.style.left = `${Math.min(Math.max(startPosition, 0), 100)}%`;
  });
</script>

<div
  bind:this={container}
  class="relative w-full h-full overflow-hidden cursor-ew-resize"
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mouseleave={handleMouseUp}
  on:mousemove={handleMouseMove}
>
  <!-- After Image (Background) -->
  <img
    src={afterImage}
    alt="After"
    class="absolute inset-0 w-full h-full object-cover"
  />
  
  <!-- Before Image (Sliding Part) -->
  <div
    class="absolute inset-0 overflow-hidden"
    style="clip-path: inset(0 {100 - parseInt(slider?.style?.left || '0')}% 0 0)"
  >
    <img
      src={beforeImage}
      alt="Before"
      class="absolute inset-0 w-full h-full object-cover"
    />
  </div>
  
  <!-- Slider Handle -->
  <div
    bind:this={slider}
    class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize transform -translate-x-1/2"
    style="left: 50%"
  >
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
      <div class="w-4 h-4 text-gray-400">⇄</div>
    </div>
  </div>
</div>