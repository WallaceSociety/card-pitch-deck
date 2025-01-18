<script lang="ts">
  import type { VideoQuestionCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  import VideoPlayer from '../video/VideoPlayer.svelte';
  import VideoOverlay from '../video/VideoOverlay.svelte';

  export let card: VideoQuestionCard;
  export let onNext: () => void;
  export let isLastCard = false;

  let showOverlay = false;

  function handleVideoEnd() {
    showOverlay = true;
  }
</script>

<CardWrapper className="relative p-0">
  <div class="absolute inset-0">
    <VideoPlayer videoUrl={card.videoUrl} on:videoEnd={handleVideoEnd} />

    {#if showOverlay}
      <VideoOverlay buttons={card.buttons} cardKey={card.key} title={card.title} {onNext} {isLastCard} labelNext={card.cta.labelNext} labelFinish={card.cta.labelFinish} subText={card.cta.subText} />
    {/if}
  </div>
</CardWrapper>
