import type { Button } from '../../types/CardTypes';

export function handleButtonAction(button: Button): void {
  switch (button.action) {
    case 'link':
      window.open(button.detail, '_blank', 'noopener,noreferrer');
      break;
    case 'sound':
      const audio = new Audio(button.detail);
      audio.play();
      break;
  }
}