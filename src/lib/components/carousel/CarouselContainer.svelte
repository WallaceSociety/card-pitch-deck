<script lang="ts">
  import { onMount } from 'svelte';
  
  export let onNext: (() => void) | undefined = undefined;
  export let isLastCard = false;
  export let ctaLabel = '';
  
  let container: HTMLDivElement;
  let isDragging = false;
  let startX: number;
  let scrollLeft: number;
  
  function handleDragStart(e: MouseEvent | TouchEvent) {
    isDragging = true;
    if (e instanceof MouseEvent) {
      startX = e.pageX - container.offsetLeft;
    } else {
      startX = e.touches[0].pageX - container.offsetLeft;
    }
    scrollLeft = container.scrollLeft;
  }
  
  function handleDragEnd() {
    isDragging = false;
  }
  
  function handleDragMove(e: MouseEvent | TouchEvent) {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e instanceof MouseEvent 
      ? e.pageX - container.offsetLeft 
      : e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  }
  
  onMount(() => {
    container.addEventListener('touchstart', handleDragStart);
    container.addEventListener('touchend', handleDragEnd);
    container.addEventListener('touchmove', handleDragMove);
    
    return () => {
      container.removeEventListener('touchstart', handleDragStart);
      container.removeEventListener('touchend', handleDragEnd);
      container.removeEventListener('touchmove', handleDragMove);
    };
  });
</script>

<div
  bind:this={container}
  class="flex-1 overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
  on:mousedown={handleDragStart}
  on:mouseleave={handleDragEnd}
  on:mouseup={handleDragEnd}
  on:mousemove={handleDragMove}
>
  <div class="flex h-full">
    <slot />
  </div>
</div>

<style>
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>