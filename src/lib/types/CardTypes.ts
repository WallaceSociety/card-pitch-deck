// Add these interfaces to the existing types file

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
  cta: {
    labelNext: string;
    labelFinish: string;
  };
}