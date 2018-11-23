import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { SocketMessage } from '../types/socketMessage';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  username: String = '';
  userTyping: Boolean = false;
  userNameTyping;

  constructor( private chatService: ChatService) { }

  ngOnInit() {
    this.username = this.chatService.user.userName;

    this.chatService.userTyping.subscribe(
      (user: SocketMessage) => {
        const data = JSON.parse(user.text);
        this.userNameTyping = data.message;
        this.userTyping = true;
        console.log('chatroom component: ', user);
        setTimeout(() => {
          this.userNameTyping = null;
          this.userTyping = false;
        }, 350);

      }
    );
  }

}
