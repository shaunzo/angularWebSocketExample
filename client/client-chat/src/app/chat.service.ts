// Step 2: define our chat service which will simplify the way we interact with our websockets

import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: Subject<any>;

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
  }

  sendMsg(type, msg) {
    switch (type) {
      case 'new-message':
      this.messages.next(msg);
        break;
      default:
        console.log('No action for message!');
        break;
    }
  }
}
