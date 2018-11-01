import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UsersService } from '../services/users.service';
import { ChatService } from '../services/chat.service';
import { WebSocketService } from '../services/webSocket.service';

import { UserAddedMessage } from '../types/userAdded';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  userName: any;
  userTyping: UserAddedMessage;
  userStoppedTyping: UserAddedMessage;


  constructor(
    private usersService: UsersService,
    private chatService: ChatService,
    private webSocketService: WebSocketService ) {
  }

  ngOnInit() {
    this.userName = this.usersService.userName;
    console.log('Joined chatroom as ' + this.userName);
  }

  onChatInput() {
    this.userTyping = {
      name: 'user_typing',
      user: this.userName,
      message: 'is busy typing...'
    };

    console.log('this.userTyping: ', this.userTyping);

    this.webSocketService.sendMessage(this.userTyping);
  }

  onKeyUp() {
    this.userStoppedTyping = {
      name: 'user_stopped_typing',
      user: this.userName,
      message: 'stopped typing'
    };

    setTimeout(() => {
      console.log('Stopped typing...');
      this.webSocketService.sendMessage(this.userStoppedTyping);
    }, 400);
  }

}
