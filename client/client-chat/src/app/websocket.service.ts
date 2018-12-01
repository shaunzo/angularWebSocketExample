// Step 1: define our websocket service
// This service makes our websocket connection and supplies an observable that our abgular application listens to

import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject, Observable } from 'rxjs';
import * as Rx from 'rxjs';
import { environment } from '../environments/environment';
import { SocketMessage } from './types/socketMessage';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  userTyping = new Subject;
  chatMessage = new Subject;

  socket;


  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    // This method will return a rx.subject
    this.socket = io(environment.ws_url);

    // define both an obervable and observer which will combine to
    // create a rxjs subject

    const observable = new Observable( observer => {

      // Send message everytime server recieves a chat message
      // this.socket.on('message', (data) => {
      //   const socketData = JSON.parse(data.text);
      //   observer.next(socketData);
      // });

      return() => {
        this.socket.disconnect();
      };
    });

    // Create our observer
    const observer = {
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      }
    };

    return Rx.Subject.create(observer, observable);
  }
}
