import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.scss']
})
export class JoinChatComponent implements OnInit {

  userName = '';

  constructor( private usersService: UsersService, private authService: AuthService) { }

  ngOnInit() {
  }


  join() {
    this.usersService.userJoined.next(this.userName);
    if (this.userName !== '') {
      this.authService.login();
    }
  }

}
