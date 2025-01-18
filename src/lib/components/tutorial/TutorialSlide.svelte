<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { TutorialSlide, TutorialPoint } from '../../types/CardTypes';
  import TutorialPoint from './TutorialPoint.svelte';
  import { tutorialStore } from '../../stores/tutorialStore';
  
  export let slide: TutorialSlide;
  export let allPointsClicked = false;
  export let slideIndex: number;

  const dispatch = createEventDispatcher();
  let isZoomed = false;
  let activePoint: TutorialPoint | null = null;
  let container: HTMLDivElement;

  function handlePointClick(point: TutorialPoint) {
    if (point.zoom && !isZoomed) {
      isZoomed = true;
      activePoint = point;
    }
  }

  function handleBackgroundClick() {
    if (isZoomed && activePoint) {
      isZoomed = false; // Reset zoom state
      activePoint = null; // Remove the active point reference
      dispatch('pointClick', activePoint); // Dispatch a point click event
      if (allPointsClicked) {
        dispatch('complete'); // Dispatch completion event if all points are clicked
      }
    }
  }

  function handlePointComplete(event: CustomEvent<TutorialPoint>) {
    const point = event.detail;
    console.log(point,'aaa');
    if (point.zoom) {
      handlePointClick(point);
    } else {
      dispatch('pointClick', point);
      if (allPointsClicked) {
        dispatch('complete');
      }
    }
  }

  $: zoomStyle = isZoomed && activePoint ? `
    transform: scale(3) translate(
      ${-(activePoint.x - container?.clientWidth / 2)}px,
      ${-(activePoint.y - container?.clientHeight / 2)}px
    );
  ` : ''; // Zoom style for zooming in

  // Ensure the zoom is properly cleared when zooming out
  $: if (!isZoomed) {
    zoomStyle = ''; // Reset the zoom style when zooming out
  }
</script>

<div 
  class="relative h-full overflow-hidden" 
  bind:this={container}
  on:click={handleBackgroundClick}
>
  <div 
    class="w-full h-full transition-transform duration-500"
    style={zoomStyle}
  >
    <img
      src={slide.image}
      alt="Tutorial slide"
      class="w-full h-full object-cover"
    />
    
    {#if slide.points}
      {#each slide.points as point}
        <TutorialPoint
          {point}
          {slideIndex}
          {isZoomed}
          active={!isZoomed || point === activePoint}
          on:complete={handlePointComplete}
        />
      {/each}
    {/if}
  </div>

  {#if isZoomed}
    <div 
      class="absolute inset-0 bg-black/20 cursor-pointer z-50"
      on:click|stopPropagation={handleBackgroundClick}
    >
      <div class="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm">
        Click anywhere to zoom out
      </div>
    </div>
  {/if}
</div>
