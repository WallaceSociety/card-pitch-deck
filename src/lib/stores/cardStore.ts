import { writable } from 'svelte/store';
import type { Button, CardResult } from '../types/CardTypes';
import { handleButtonAction } from '../components/buttons/ButtonHandler';

interface CardInteractions {
  [key: string]: Button[];
}

function createCardStore() {
  const { subscribe, update } = writable<CardInteractions>({});

  return {
    subscribe,
    toggleInteraction: (cardKey: string, button: Button) => {
      update(interactions => {
        const cardInteractions = interactions[cardKey] || [];
        const isChecked = cardInteractions.some(b => b.value === button.value);
        
        if (isChecked) {
          return {
            ...interactions,
            [cardKey]: cardInteractions.filter(b => b.value !== button.value)
          };
        } else {
          handleButtonAction(button);
          return {
            ...interactions,
            [cardKey]: [...cardInteractions, button]
          };
        }
      });
    },
    getResults: (cards: any[]): CardResult[] => {
      let results: CardResult[] = [];
      let interactions: CardInteractions;
      
      subscribe(value => {
        interactions = value;
      })();

      return cards.map(card => ({
        cardKey: card.key,
        displayKey: card.custom_key || card.key,
        checkedButtons: interactions[card.key] || []
      }));
    }
  };
}

export const cardStore = createCardStore();