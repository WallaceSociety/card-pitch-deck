<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import VideoControls from './VideoControls.svelte';
  
  export let videoUrl: string;
  
  const dispatch = createEventDispatcher();
  let video: HTMLVideoElement;
  let isPlaying = false;
  
  function togglePlay() {
    if (video.paused) {
      playVideo();
    } else {
      video.pause();
      isPlaying = false;
    }
  }
  
  function playVideo() {
    video.play()
      .then(() => {
        isPlaying = true;
      })
      .catch((error) => {
        console.error('Error playing video:', error);
      });
  }
  
  function handleVideoEnd() {
    isPlaying = false;
    dispatch('videoEnd');
  }
  
  onMount(() => {
    video.addEventListener('ended', handleVideoEnd);
    playVideo();
    
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  });
</script>

<div class="absolute inset-0">
  <video
    bind:this={video}
    class="absolute inset-0 w-full h-full object-cover"
    preload="auto"
  >
    <source src={videoUrl} type="video/mp4">
    Your browser does not support the video tag.
  </video>

  {#if !isPlaying}
    <VideoControls 
      {isPlaying} 
      on:click={togglePlay}
    />
  {/if}
</div>