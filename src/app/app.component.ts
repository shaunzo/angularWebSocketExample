import { Component } from '@angular/core';
import { WebSocketService } from './services/webSocket.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageFromServer: string;
  title = 'websocketsExample';
  ws: WebSocket;
  url: string;


  constructor( private wsService: WebSocketService) {
    this.url = environment.webSocketUrl;

    // Initiate websocket connection
    this.wsService.createObservablesocket(this.url)
    .subscribe(
      data => {
        this.messageFromServer = data;
      },
      err => console.log(err),
      () => console.log('The observable stream is complete')
    );
  }

  sendMessageToServer() {
    console.log('Client sending message to Websocket server');
    this.wsService.sendMessage('Hello from client');
  }
}
