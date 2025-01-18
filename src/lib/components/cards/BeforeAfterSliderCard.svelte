<script lang="ts">
  import type { BeforeAfterSliderCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  import ImageSlider from '../slider/ImageSlider.svelte';
  import SliderOverlay from '../slider/SliderOverlay.svelte';
  import CardCta from '../cta/CardCta.svelte';

  export let card: BeforeAfterSliderCard;
  export let onNext: () => void;
  export let isLastCard = false;

  let showOverlay = false;

  function handleContinue() {
    showOverlay = true;
  }
</script>

<CardWrapper>
  <div class="flex flex-col h-full">
    <div class="relative flex-1">
      <ImageSlider beforeImage={card.imageBefore} afterImage={card.imageAfter} beforeObjectFit={card.imageBeforeObjectFit} afterObjectFit={card.imageAfterObjectFit} startPosition={card.startPosition} />
      {#if showOverlay}
        <SliderOverlay buttons={card.buttons} cardKey={card.key} title={card.title} {onNext} {isLastCard} labelNext={card.cta.labelNext} labelFinish={card.cta.labelFinish} subText={card.cta.subText} />
      {/if}
    </div>

    {#if !showOverlay}
      <div class="relative">
        <CardCta onNext={handleContinue} {isLastCard} labelNext="Continue" />
      </div>
    {/if}
  </div>
</CardWrapper>
