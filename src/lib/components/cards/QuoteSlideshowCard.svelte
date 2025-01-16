<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import type { QuoteSlideshowCard } from '../../types/CardTypes';
  import CardWrapper from '../CardWrapper.svelte';

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
    advanceMethod: card.config?.advanceMethod || 'both'
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
  <div class="relative h-full flex flex-col">
    {#each card.items as item, i}
      <div
        class="absolute inset-0 transition-opacity duration-500"
        class:opacity-0={currentIndex !== i}
        class:pointer-events-none={currentIndex !== i}
      >
        <!-- Background -->
        <div class="absolute inset-0">
          <img
            src={item.background}
            alt={item.label}
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0"
            style="background-color: {config.overlayColor}; opacity: {config.overlayOpacity};"
          />
        </div>

        <!-- Content -->
        <div
          class="relative h-full flex flex-col items-center justify-center p-8 text-center"
          style="font-family: {config.fontFamily}; color: {config.textColor};"
          on:click={handleClick}
        >
          <h3 class="text-xl font-semibold mb-2 opacity-75">
            {item.label}
          </h3>
          <blockquote
            class="mb-4 leading-relaxed"
            style="font-size: {config.fontSize};"
          >
            "{item.quote}"
          </blockquote>
          <p class="text-sm opacity-75">
            {item.attribution}
          </p>
        </div>
      </div>
    {/each}

    <!-- Progress dots -->
    <div class="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
      {#each card.items as _, i}
        <div
          class="w-2 h-2 rounded-full transition-colors duration-200 {currentIndex === i ? 'bg-white' : 'bg-white/30'}"
        />
      {/each}
    </div>

    <!-- CTA -->
    {#if hasSeenAllSlides}
      <div 
        class="absolute bottom-0 left-0 right-0 p-4"
        transition:fade={{ duration: 300 }}
      >
        <button
          on:click={onNext}
          class="w-full px-4 py-3 bg-white text-black rounded-md
                 hover:bg-white/90 transition-colors font-medium"
        >
          {card.cta.labelNext}
        </button>
        {#if card.cta.subText}
          <p class="text-center text-sm text-white/75 mt-2">
            {card.cta.subText}
          </p>
        {/if}
      </div>
    {/if}
  </div>
</CardWrapper>