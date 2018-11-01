import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import { WebSocketService  } from '../../services/webSocket.service';
import { UsersService } from '../../services/users.service';
import { ChatService } from '../../services/chat.service';

import { UserAddedMessage } from '../../types/userAdded';
import { ChatMember } from '../../types/chatMember';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  url = environment.webSocketUrl;
  userName = '';
  userAdded: UserAddedMessage;
  userTypingIndex: number;
  chatMembers = [];
  chatMember: ChatMember;

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

    this.wsService.sendMessage(this.userAdded);

    console.log('Chat members: ', this.chatMembers);

    this.addUserToChatMembers(this.userName);

    this.usersService.userJoined.subscribe(
      data => {
        // Go through the members array to find the idex for this user.
        console.log('Running loop:');
        for (let i = 0; i < this.chatMembers.length; i++) {
          const name = this.chatMembers[i].name;
          console.log(this.chatMembers[i]);
          if (name === this.userName) {
            this.userTypingIndex = i;
            return;
          } else {
            // Else add user to members list
            this.addUserToChatMembers(data);
          }
        }
      }
    );

    // Update DOM if user is typing
    this.usersService.userTyping.subscribe(
      user => {
        console.log(user + ' is typing , index is ' + this.userTypingIndex );
        this.chatMembers[this.userTypingIndex].typing = true;
      }
    );

    // Update DOM if user stopes typing
    this.usersService.userStoppedTyping.subscribe(
      user => {
        this.chatMembers[this.userTypingIndex].typing = false;
      }
    );
  }


  addUserToChatMembers(username) {
    this.chatMember = {
      name: username,
      typing: false
    };

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
      this.chatMembers.push(this.chatMember);
      console.log('New user added to array: ', this.chatMembers);
    }
  }
}
