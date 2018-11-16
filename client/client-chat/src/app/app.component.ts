// Step 3: We need to modify our app component

import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client-chat';
  user = {
    loggedIn: false,
    userName: null
  };

  constructor( private chat: ChatService) {}

  ngOnInit() {
    // Subscribe to all incoming messages
    // this.chat.messages.subscribe(msg => {
    //   console.log(msg);
    // });
  }

  // Define our send message function
  sendMessage() {
    this.chat.sendMsg('new-message', 'Test Message');
  }

}
