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

  user = {
    userName: 'Ted',
    loggedIn: true
  };

  messages =  new Subject;
  userTyping = new Subject;

  // Listen for incoming messages
  constructor( private wsService: WebsocketService) {
    this.messages = <Subject<any>> wsService
    .connect().pipe(
      map((response: any): any => {
        console.log('Message type = ' + response.type);
        // Dispatch subject based on response.type
        return response;
      })
    );

    this.userTyping = <Subject<any>> wsService
    .connect().pipe(
      map((response: any): any => {
        console.log('Message type = ' + response.type);
        // Dispatch subject based on response.type
        return response;
      })
    );


  }

  sendMsg(type, msg) {
    switch (type) {
      case 'new-message':
      console.log('dispatching subject "messages",message received from socket:', msg);
      this.messages.next(msg);
        break;
      case 'user-typing':
      console.log('dispatching subject "userTyping", message received from socket:', msg);
      this.userTyping.next({ type: 'user-typing', message: msg});
        break;
      default:
        console.log('No action for message!');
        break;
    }
  }
}
