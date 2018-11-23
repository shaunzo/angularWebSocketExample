import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: String = '';
  loggedIn: Boolean = false;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.username = this.chatService.user.userName;
    this.chatService.username.subscribe(
      (data: String) => {
       this.username = data;
       this.loggedIn = this.chatService.user.loggedIn;
      }
    );
  }

}
