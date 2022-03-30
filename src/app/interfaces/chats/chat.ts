import { Messages } from './messages';

export interface ChatInterface {
  id?: string;
  users?: string[];
  usernames?: string[];
  messages?: Messages[];
  createdAt?: number;
  newMessage?: number;
}
