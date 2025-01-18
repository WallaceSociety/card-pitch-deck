export interface CTA {
  labelNext: string;
  labelFinish: string;
  subText?: string;
  onSubmit?: string;
}

export interface Button {
  label: string;
  action: 'sound' | 'link' | 'popup';
  value: string;
  detail: string;
}

export interface BaseCard {
  type: string;
  key: string;
  custom_key: string;
}

export interface CardResult {
  cardKey: string;
  displayKey: string;
  checkedButtons: Button[];
}

export interface ImageCard extends BaseCard {
  type: 'image';
  src: string;
  objectFit?: string;
  cta: CTA;
}

export interface VideoQuestionCard extends BaseCard {
  type: 'video_question';
  videoUrl: string;
  title: string;
  buttons: Button[];
  cta: CTA;
}

export interface BeforeAfterSliderCard extends BaseCard {
  type: 'before_after_slider';
  imageBefore: string;
  imageBeforeObjectFit?: string;
  imageAfter: string;
  imageAfterObjectFit?: string;
  startPosition: number;
  title: string;
  buttons: Button[];
  cta: CTA;
}

export interface Message {
  sender: string;
  text: string;
  time: string;
  emoji?: string;
}

export interface SmsConversationCard extends BaseCard {
  type: 'sms_conversation';
  messages: Message[];
  speed: number;
  cta: CTA;
}

export interface ChecklistItem {
  label: string;
  audio?: string;
}

export interface ChecklistAnimationCard extends BaseCard {
  type: 'checklist_animation';
  title: string;
  description?: string;
  items: ChecklistItem[];
  cta: CTA;
}

export interface TutorialAction {
  action: 'sound' | 'popup' | 'link';
  audio?: string;
  content?: string;
  url?: string;
}

export interface TutorialPoint {
  x: number;
  y: number;
  actions: TutorialAction[];
  zoom?: boolean;
}

export interface TutorialSlide {
  image: string;
  points?: TutorialPoint[];
}

export interface TutorialSlideshowCard extends BaseCard {
  type: 'tutorial_slideshow';
  slides: TutorialSlide[];
  cta: CTA;
}

export interface ImageCarouselCard extends BaseCard {
  type: 'image_carousel';
  images: string[];
  objectFit?: string;
  backgroundColor?: string;
  cta: CTA;
}

export interface QuoteItem {
  label: string;
  quote: string;
  attribution: string;
  background: string;
}

export interface QuoteSlideshowCard extends BaseCard {
  type: 'quote_slideshow';
  title: string;
  description?: string;
  items: QuoteItem[];
  cta: CTA;
}

export interface FormValidation {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  message: string;
  matchField?: string;
}

export interface FormFieldOption {
  label: string;
  value: string;
}

export interface FormField {
  label: string;
  type: 'text' | 'email' | 'password' | 'tel' | 'dropdown' | 'radio' | 'checkbox' | 'file';
  name: string;
  placeholder?: string;
  required?: boolean;
  validation: FormValidation;
  options?: (string | FormFieldOption)[];
  acceptedFileTypes?: string[];
}

export interface FormCard extends BaseCard {
  type: 'form';
  title: string;
  description: string;
  fields: FormField[];
  cta: CTA;
}

export type Card = ImageCard | VideoQuestionCard | BeforeAfterSliderCard | SmsConversationCard | ChecklistAnimationCard | TutorialSlideshowCard | ImageCarouselCard | QuoteSlideshowCard | FormCard;
