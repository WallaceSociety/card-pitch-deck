<script lang="ts">
  import { onMount, afterUpdate, onDestroy } from "svelte";
  import type { SmsConversationCard } from "../../types/CardTypes";
  import CardWrapper from "../CardWrapper.svelte";

  export let card: SmsConversationCard;
  export let onNext: () => void;
  export let isLastCard = false;

  let container: HTMLDivElement;
  let currentIndex = 0;
  let showCta = false;
  let showTyping = false;
  let messageSound: HTMLAudioElement;
  let typingSound: HTMLAudioElement;

  // Fixed delays
  const FIRST_MESSAGE_DELAY = 1000; // Always 1 second for first message
  const BASE_CHAR_TYPING_SPEED = 100; // Base milliseconds per character at speed 1
  // Link Parser
  function parseLinks(text: string): string {
    const urlRegex = /(\bhttps?:\/\/[^\s]+)|(\bwww\.[^\s]+)/gi;
    return text.replace(urlRegex, (url) => {
      const href = url.startsWith("http") ? url : `https://${url}`;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">${url}</a>`;
    });
  }

  // Calculate thinking delay based on speed (6s to 0.5s)
  $: thinkingDelay = 6000 - (card.speed - 1) * (5500 / 9);

  function scrollToBottom() {
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }

  function getRandomDelay(baseDelay: number) {
    // Add small random variance (±15%)
    const variance = baseDelay * 0.15;
    return baseDelay + (Math.random() * variance - variance / 2);
  }

  function calculateTypingDuration(message: string, speed: number): number {
    // Calculate base duration based on message length
    const charCount = message.length;

    // Adjust character typing speed based on speed parameter
    // speed 1 = 100ms per char, speed 10 = 15ms per char (twice as fast)
    const charSpeed = BASE_CHAR_TYPING_SPEED / (1 + (speed - 1) * (5.67 / 9));

    // Calculate total duration with minimum and maximum bounds
    const duration = Math.max(
      500, // Minimum 0.5 second for speed 10
      Math.min(
        charCount * charSpeed,
        8000 // Maximum 8 seconds
      )
    );

    return duration;
  }

  function playMessageSound() {
    if (messageSound) {
      messageSound.currentTime = 0;
      messageSound.play();
    }
  }

  function startTypingSound() {
    if (
      typingSound &&
      currentIndex < card.messages.length &&
      card.messages[currentIndex].sender === card.messages[0].sender
    ) {
      typingSound.currentTime = 0;
      typingSound.loop = true;
      typingSound.play();
    }
  }

  function stopTypingSound() {
    if (typingSound) {
      typingSound.pause();
      typingSound.currentTime = 0;
      typingSound.loop = false;
    }
  }

  function displayNextMessage() {
    if (currentIndex < card.messages.length) {
      showTyping = false;
      stopTypingSound();
      currentIndex++;
      playMessageSound();

      if (currentIndex === card.messages.length) {
        setTimeout(() => {
          showCta = true;
        }, 500); // Quick transition to CTA
      } else {
        // Random delay before showing typing indicator for next message
        const nextThinkingDelay = getRandomDelay(thinkingDelay);
        setTimeout(() => {
          showTyping = true;
          startTypingSound();
          // Calculate typing duration based on next message length and speed
          const nextMessage = card.messages[currentIndex];
          const typingDuration = calculateTypingDuration(
            nextMessage.text,
            card.speed
          );
          setTimeout(displayNextMessage, typingDuration);
        }, nextThinkingDelay);
      }
    }
  }

  onMount(() => {
    // First message always appears after 1 second
    setTimeout(() => {
      showTyping = true;
      startTypingSound();
      const firstTypingDuration = calculateTypingDuration(
        card.messages[0].text,
        card.speed
      );
      setTimeout(displayNextMessage, firstTypingDuration);
    }, FIRST_MESSAGE_DELAY);
  });

  onDestroy(() => {
    stopTypingSound();
  });

  afterUpdate(scrollToBottom);
</script>

<CardWrapper>
  <div class="flex flex-col h-full bg-gray-100">
    <!-- Header -->
    <div class="bg-gray-200 p-4 border-b border-gray-300">
      <div class="text-center text-sm text-gray-600">
        {card.messages[0]?.time || "Today"}
      </div>
      <div class="text-center font-semibold mt-1">
        {card.messages[0]?.sender}
      </div>
    </div>

    <!-- Messages Container -->
    <div bind:this={container} class="flex-1 overflow-y-auto p-4 space-y-3">
      {#each card.messages.slice(0, currentIndex) as message}
        <div
          class="flex flex-col {message.sender === card.messages[0].sender
            ? 'items-start'
            : 'items-end'}"
        >
          <div
            class="max-w-[80%] px-4 py-2 rounded-2xl text-sm
             {message.sender === card.messages[0].sender
              ? 'bg-gray-300 rounded-bl-sm'
              : 'bg-blue-500 text-white rounded-br-sm'}"
          >
            {@html parseLinks(message.text)}
            {#if message.emoji}
              <span class="text-lg ml-1">{message.emoji}</span>
            {/if}
          </div>
          <div class="text-xs text-gray-500 mt-1 px-1">
            {message.time}
          </div>
        </div>
      {/each}

      {#if showTyping && currentIndex < card.messages.length}
        <div
          class="flex {card.messages[currentIndex].sender ===
          card.messages[0].sender
            ? 'justify-start'
            : 'justify-end'}"
        >
          <div class="bg-gray-300 rounded-full p-2 w-16">
            <div class="flex justify-center gap-1">
              <div
                class="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style="animation-delay: 0s"
              ></div>
              <div
                class="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style="animation-delay: 0.2s"
              ></div>
              <div
                class="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                style="animation-delay: 0.4s"
              ></div>
            </div>
          </div>
        </div>
      {/if}
    </div>

    <!-- CTA Button -->
    {#if showCta}
      <div class="p-4 bg-white border-t border-gray-200">
        <button
          on:click={onNext}
          class="w-full px-4 py-3 bg-blue-500 text-white rounded-xl
                 hover:bg-blue-600 transition-colors font-medium shadow-sm"
        >
          {isLastCard ? card.cta.labelFinish : card.cta.labelNext}
        </button>
      </div>
    {/if}
  </div>
</CardWrapper>

<audio bind:this={messageSound} src="/src/lib/sounds/message.mp3" preload="auto"
></audio>

<audio bind:this={typingSound} src="/src/lib/sounds/typing.mp3" preload="auto"
></audio>
