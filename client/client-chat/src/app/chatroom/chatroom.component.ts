import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { WebsocketService } from '../websocket.service';

// Deprecate this when implementing authGuard
import { Router } from '@angular/router';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  username: String = '';
  userTyping: Boolean = false;
  userNameTyping: String;

  constructor( private chatService: ChatService, private router: Router, private wsService: WebsocketService) { }

  ngOnInit() {

    // Replace with authGuard
    if (!this.chatService.user.loggedIn) {
      this.router.navigate(['']);
    }


    this.username = this.chatService.user.userName;

    this.wsService.userTyping.subscribe(
      (user: any) => {
        // const data = JSON.parse(user.text);
        this.userNameTyping = user.message;

        // Only show user typing message if its not me...
        if ( this.userNameTyping !== this.username ) {
          this.userTyping = true;
        } else {
          this.userTyping = false;
        }

        setTimeout(() => {
          this.userNameTyping = null;
          this.userTyping = false;
        }, 350);
      }
    );
  }
}
