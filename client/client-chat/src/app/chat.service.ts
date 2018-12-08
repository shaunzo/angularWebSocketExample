// Step 2: define our chat service which will simplify the way we interact with our websockets
// This service will dispatch subjects based on teh message type received

import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages =  new Subject;
  username = new Subject;
  newChatMessage = new Subject;

  user = {
    userName: '',
    loggedIn:  false
  };

  // Listen for incoming messages
  constructor( private wsService: WebsocketService) {

    // Listening for incoming messages
    this.messages = <Subject<any>> wsService
    .connect().pipe(
      map((response: any): any => {
        // Dispatch subject based on response.type
        return response;
      })
    );

    this.username.subscribe(
      (data: string) => {
        if (data !== null || data !== '') {
          this.user.userName = data;
          this.user.loggedIn = true;
        } else {
          this.user.userName = '';
          this.user.loggedIn = false;
        }
      }
    );

    this.wsService.chatMessage.subscribe(
      data => {
        this.wsService.socket.emit('chat-message', data);
      }
    );


    this.wsService.socket.on(
      'chat-message', (data) => {
        console.log('Received', data);
        this.newChatMessage.next(data);
      });
  }

  sendMsg(type, msg) {
    switch (type) {
      case 'chat-message':
      this.wsService.chatMessage.next({ type: 'chat-message', message: msg.message, username: msg.username });
        break;

      case 'user-typing':
      this.wsService.userTyping.next({ type: 'user-typing', message: msg});
        break;

      default:
        console.log('No action for message!');
        break;
    }
  }
}
