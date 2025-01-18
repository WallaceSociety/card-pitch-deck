<script lang="ts">
  import type { ImageCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  import CardCta from '../cta/CardCta.svelte';

  export let card: ImageCard;
  export let onNext: () => void;
  export let isLastCard = false;

  $: objectFit = card.objectFit || 'cover';
</script>

<CardWrapper>
  <div class="relative flex flex-col h-full">
    <div class="relative flex-1">
      <img src={card.src} alt="Card image" class="absolute inset-0 w-full h-full" style="object-fit: {objectFit}" />
    </div>

    <CardCta {onNext} {isLastCard} labelNext={card.cta.labelNext} labelFinish={card.cta.labelFinish} subText={card.cta.subText} />
  </div>
</CardWrapper>
