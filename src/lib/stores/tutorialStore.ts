import { writable } from 'svelte/store';

interface TutorialState {
  points: { [key: string]: boolean };
}

function createTutorialStore() {
  const { subscribe, update } = writable<TutorialState>({ points: {} });

  return {
    subscribe,
    markPointClicked: (slideIndex: number, pointX: number, pointY: number) => {
      update(state => ({
        ...state,
        points: {
          ...state.points,
          [`${slideIndex}-${pointX}-${pointY}`]: true
        }
      }));
    },
    isPointClicked: (slideIndex: number, pointX: number, pointY: number) => {
      let result = false;
      subscribe(state => {
        result = state.points[`${slideIndex}-${pointX}-${pointY}`] || false;
      })();
      return result;
    },
    clearSlidePoints: (slideIndex: number) => {
      update(state => {
        const newPoints = { ...state.points };
        Object.keys(newPoints).forEach(key => {
          if (key.startsWith(`${slideIndex}-`)) {
            delete newPoints[key];
          }
        });
        return { ...state, points: newPoints };
      });
    }
  };
}

export const tutorialStore = createTutorialStore();