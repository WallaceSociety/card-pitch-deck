<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import type { QuoteSlideshowCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';
  import CardCta from '../cta/CardCta.svelte';

  export let card: QuoteSlideshowCard;
  export let onNext: () => void;
  export let isLastCard = false;

  let currentIndex = 0;
  let hasSeenAllSlides = false;
  let timer: NodeJS.Timeout;

  // Smart defaults
  const config = {
    overlayColor: card.config?.overlayColor || '#000000',
    overlayOpacity: card.config?.overlayOpacity || 0.6,
    fontFamily: card.config?.fontFamily || 'system-ui',
    fontSize: card.config?.fontSize || '1.5rem',
    textColor: card.config?.textColor || '#ffffff',
    delay: card.config?.delay || 5000,
    advanceMethod: card.config?.advanceMethod || 'both',
  };

  function nextSlide() {
    if (currentIndex < card.items.length - 1) {
      currentIndex++;
    } else {
      hasSeenAllSlides = true;
      if (config.advanceMethod === 'time') {
        currentIndex = 0;
      }
    }
  }

  function startTimer() {
    if (config.advanceMethod !== 'tap') {
      timer = setInterval(nextSlide, config.delay);
    }
  }

  function handleClick() {
    if (config.advanceMethod !== 'time') {
      nextSlide();
    }
  }

  onMount(() => {
    startTimer();
  });

  onDestroy(() => {
    if (timer) clearInterval(timer);
  });
</script>

<CardWrapper>
  <div class="relative flex flex-col h-full">
    {#each card.items as item, i}
      <div class="absolute inset-0 transition-opacity duration-500" class:opacity-0={currentIndex !== i} class:pointer-events-none={currentIndex !== i}>
        <!-- Background -->
        <div class="absolute inset-0">
          <img src={item.background} alt={item.label} class="object-cover w-full h-full" />
          <div class="absolute inset-0" style="background-color: {config.overlayColor}; opacity: {config.overlayOpacity};" />
        </div>

        <!-- Content -->
        <div class="relative flex flex-col items-center justify-center h-full p-8 text-center" style="font-family: {config.fontFamily}; color: {config.textColor};" on:click={handleClick} on:keydown={(e) => e.key === 'Enter' && handleClick()} tabindex="0" role="button">
          <h3 class="mb-2 text-xl font-semibold opacity-75">
            {item.label}
          </h3>
          <blockquote class="mb-4 leading-relaxed" style="font-size: {config.fontSize};">
            "{item.quote}"
          </blockquote>
          <p class="text-sm opacity-75">
            {item.attribution}
          </p>
        </div>
      </div>
    {/each}

    <!-- Progress dots -->
    <div class="absolute left-0 right-0 flex justify-center gap-2 bottom-20">
      {#each card.items as _, i}
        <div class="w-2 h-2 rounded-full transition-colors duration-200 {currentIndex === i ? 'bg-white' : 'bg-white/30'}" />
      {/each}
    </div>

    <!-- CTA -->
    {#if hasSeenAllSlides}
      <CardCta {onNext} {isLastCard} labelNext={card.cta.labelNext} labelFinish={card.cta.labelFinish} subText={card.cta.subText} />
    {/if}
  </div>
</CardWrapper>
