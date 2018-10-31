import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { WebSocketService  } from '../services/webSocket.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.scss']
})
export class JoinChatComponent implements OnInit {

  userName = '';
  url = environment.webSocketUrl;

  constructor( private usersService: UsersService, private wsService: WebSocketService) { }

  ngOnInit() {
    // Initiate websocket connection
    // this.wsService.createObservablesocket(this.url)
    // .subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   err => console.log(err),
    //   () => console.log('The observable stream is complete')
    // );
  }


  join() {
    console.log('this.usersService.userJoined.next(this.userName)', this.userName);
    if (this.userName !== '') {
      this.usersService.newUser(this.userName);
    }
  }

}
