<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Card } from '../types/CardTypes';
  import VideoQuestionCard from './cards/VideoQuestionCard.svelte';
  import ImageCard from './cards/ImageCard.svelte';
  import BeforeAfterSliderCard from './cards/BeforeAfterSliderCard.svelte';
  import ImageCarouselCard from './cards/ImageCarouselCard.svelte';
  import ChecklistAnimationCard from './cards/ChecklistAnimationCard.svelte';
  import TutorialSlideshowCard from './cards/TutorialSlideshowCard.svelte';
  import QuoteSlideshowCard from './cards/QuoteSlideshowCard.svelte';
  import FormCard from './cards/FormCard.svelte';
  import SmsConversationCard from './cards/SmsConversationCard.svelte';
  
  export let cards: Card[];
  export let currentIndex = 0;
  
  const dispatch = createEventDispatcher();
  
  function handleNext() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
    } else {
      dispatch('finish');
    }
  }
  
  $: currentCard = cards[currentIndex];
  $: isLastCard = currentIndex === cards.length - 1;
</script>

{#if currentCard.type === 'video_question'}
  <VideoQuestionCard 
    card={currentCard} 
    onNext={handleNext}
    {isLastCard}
  />
{:else if currentCard.type === 'image'}
  <ImageCard 
    card={currentCard} 
    onNext={handleNext}
    {isLastCard}
  />
{:else if currentCard.type === 'before_after_slider'}
  <BeforeAfterSliderCard
    card={currentCard}
    onNext={handleNext}
    {isLastCard}
  />
{:else if currentCard.type === 'image_carousel'}
  <ImageCarouselCard
    card={currentCard}
    onNext={handleNext}
    {isLastCard}
  />
{:else if currentCard.type === 'checklist_animation'}
  <ChecklistAnimationCard
    card={currentCard}
    onNext={handleNext}
    {isLastCard}
  />
{:else if currentCard.type === 'tutorial_slideshow'}
  <TutorialSlideshowCard
    card={currentCard}
    onNext={handleNext}
    {isLastCard}
  />
{:else if currentCard.type === 'quote_slideshow'}
  <QuoteSlideshowCard
    card={currentCard}
    onNext={handleNext}
    {isLastCard}
  />
{:else if currentCard.type === 'form'}
  <FormCard
    card={currentCard}
    onNext={handleNext}
    {isLastCard}
  />
{:else if currentCard.type === 'sms_conversation'}
  <SmsConversationCard
    card={currentCard}
    onNext={handleNext}
    {isLastCard}
  />
{/if}