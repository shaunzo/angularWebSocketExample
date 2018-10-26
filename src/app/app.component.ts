import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/webSocket.service';
import { environment } from '../environments/environment';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  messageFromServer: string;
  title = 'websocketsExample';
  ws: WebSocket;
  url: string;


  constructor( private wsService: WebSocketService, private usersService: UsersService) {
    this.url = environment.webSocketUrl;

    // Initiate websocket connection
    // this.wsService.createObservablesocket(this.url)
    // .subscribe(
    //   data => {
    //     this.messageFromServer = data;
    //   },
    //   err => console.log(err),
    //   () => console.log('The observable stream is complete')
    // );
  }

  ngOnInit() {
  }

  sendMessageToServer() {
    console.log('Client sending message to Websocket server');
    this.wsService.sendMessage('Hello from client');
  }
}
