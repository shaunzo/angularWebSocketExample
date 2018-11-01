import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WebSocketService  } from '../../services/webSocket.service';
import { UsersService } from '../../services/users.service';
import { UserAddedMessage } from '../../types/userAdded';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  url = environment.webSocketUrl;
  userName = '';
  userAdded: UserAddedMessage;
  chatMembers = [];

  constructor(  private wsService: WebSocketService,
                private usersService: UsersService,
                private chatService: ChatService ) {}

  ngOnInit() {

    this.userName = this.usersService.userName;

    this.userAdded = {
      name: 'user_added',
      user: this.userName,
      message: this.userName + ' has joined this chat.'
    };

    console.log('url is: ' + this.url);
    console.log('username is: ' + this.userName);

    this.chatMembers = this.chatService.chatMembers;

    this.wsService.sendMessage(JSON.stringify(this.userAdded));

    console.log('Chat members: ', this.chatMembers);

    this.addUserToChatMembers();
  }


  addUserToChatMembers() {
    let userAlreadyJoined = false;
    for (let i = 0; i < this.chatMembers.length; i++) {
      const chatMember = this.chatMembers[i];
      if (this.userName === chatMember) {
        userAlreadyJoined = true;
        return;
      }
    }
    console.log('userAlreadyJoined = ', userAlreadyJoined);
    if (!userAlreadyJoined) {
      this.chatMembers.push({
        name: this.userName
      });
      console.log('New user added to array: ', this.chatMembers);
    }
  }
}
