import { NewMessage } from './../chats/newMessage';
import { ChatInterface } from './../chats/chat';
import { Notifications } from '../notifications/notifications';

export interface UserInterface {
  //Basic info
  userEmail?: string;
  userPassword?: string;
  fullName?: string;
  userName?: string;
  description?: string;
  picture?: string;

  nationality?: string;
  premium?: boolean;
  pro?: boolean;

  //Manipulative info
  id?: string;
  createdAt?: number;

  //User Role
  role?: string;
  orgRole?: string[];

  //Teams info
  teams?: string[];
  teamsRequests?: string[];
  teamId?: string[];

  // Social Info
  friendsRequests?: string[];
  friends?: string[];
  notifications?: Notifications[];
  newMessages?: NewMessage[];
}
