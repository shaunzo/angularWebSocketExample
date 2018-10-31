import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WebSocketService  } from '../../services/webSocket.service';
import { UsersService } from '../../services/users.service';
import { UserAdded } from '../../types/userAdded.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  url = environment.webSocketUrl;
  userName = '';
  members: UserAdded[];

  constructor(private wsService: WebSocketService, private usersService: UsersService ) {
  }

  ngOnInit() {

    // this.wsService.messageReceived.subscribe(
    //   (message: UserAdded) => {
    //     console.log('New user added: ', message);
    //   }
    // );

    this.userName = this.usersService.userName;
    this.members = this.usersService.members;

    console.log('url is: ' + this.url);
    console.log('username is: ' + this.userName);
    console.log('members is: ' + this.members);

    this.wsService.sendMessage({userAdded :  this.userName});
  }

}
