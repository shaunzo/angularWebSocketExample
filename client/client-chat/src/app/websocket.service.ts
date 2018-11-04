// Step 1: define our websocket service

import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket; // Socket that connects to our socket.io server

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    // This methid will return a rx.subject
    this.socket = io(environment.ws_url);

    // define both an obervable and observer which will combine to
    // create a rxjs subject

    const observable = new Observable( observer => {
      // Everytime this observable receives a message from the server,
      // we'll want to pass teh data received from the message event
      this.socket.on('message', (data) => {
        observer.next(data);
        console.log('received a message from websocket server');
      });

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
