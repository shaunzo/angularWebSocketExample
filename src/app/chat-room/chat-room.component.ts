import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  userName: any;


  constructor( private usersService: UsersService) {
  }

  ngOnInit() {
    this.userName = this.usersService.userName;
    console.log('Joined chatroom as ' + this.usersService.userName);
  }

}
