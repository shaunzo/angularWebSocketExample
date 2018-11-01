import { Injectable } from '@angular/core';
import { ChatMessage } from '../types/chatMessage';
import { UserAddedMessage } from '../types/userAdded';

import { UsersService } from '../services/users.service';

@Injectable()
export class ChatService {
  newMessage: UserAddedMessage;
  chatMembers = [];
  chatMessages: ChatMessage[];

  constructor( private usersService: UsersService) {

    console.log('Initiated chat service');
    // Remove placeholder members
    this.chatMembers = [{name: 'Michael', typing: false}, {name: 'James', typing: false}, {name: 'John', typing: false}];
  }

}
