<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import type { TutorialPoint } from '../../types/CardTypes';
  import TutorialPopup from './TutorialPopup.svelte';
  import { tutorialStore } from '../../stores/tutorialStore';
  
  export let point: TutorialPoint;
  export let isZoomed = false;
  export let active = true;
  export let slideIndex: number;
  
  const dispatch = createEventDispatcher();
  let audio: HTMLAudioElement;
  let showPopup = false;
  let isAnimating = true;
  let isProcessing = false;

  $: isClicked = $tutorialStore.points[`${slideIndex}-${point.x}-${point.y}`] || false;

  function startAnimation() {
    const animation = setInterval(() => {
      if (!isClicked) {
        isAnimating = !isAnimating;
      }
    }, 1000);
    
    return () => clearInterval(animation);
  }

  async function handleClick() {
    if (active && !isClicked && !isProcessing) {
      isProcessing = true;
      isAnimating = false;
      tutorialStore.markPointClicked(slideIndex, point.x, point.y);
      
      for (const action of point.actions) {
        switch (action.action) {
          case 'sound':
            if (action.audio) {
              audio.src = action.audio;
              await audio.play();
              await new Promise(resolve => {
                audio.onended = resolve;
              });
            }
            break;
          case 'popup':
            showPopup = true;
            await new Promise(resolve => {
              function handleClick(e: MouseEvent) {
                if (!e.target || !(e.target as HTMLElement).closest('.popup-content')) {
                  document.removeEventListener('click', handleClick);
                  showPopup = false;
                  resolve(undefined);
                }
              }
              document.addEventListener('click', handleClick);
            });
            break;
          case 'link':
            if (action.url) {
              window.open(action.url, '_blank', 'noopener,noreferrer');
            }
            break;
        }
      }
      
      isProcessing = false;
      dispatch('complete', point);
    }
  }

  onMount(startAnimation);
</script>

<button
  class="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 
         rounded-full border-2 transition-all duration-300
         {isAnimating && active && !isClicked ? 'scale-125 border-white/50' : 'scale-100'}
         {isClicked ? 'border-green-500 bg-green-500/20' : 'border-white'}
         {!active ? 'opacity-0' : 'opacity-100'}"
  style="left: {point.x}px; top: {point.y}px"
  on:click|stopPropagation={handleClick}
>
  <span class="sr-only">Interactive point</span>
</button>

{#if showPopup}
  <TutorialPopup
    content={point.actions.find(a => a.action === 'popup')?.content || ''}
    x={point.x}
    y={point.y}
  />
{/if}

<audio bind:this={audio} preload="auto"></audio>