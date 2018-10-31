import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { WebSocketService  } from '../services/webSocket.service';
import { UserAdded } from '../types/userAdded.model';

@Injectable()
export class UsersService {
  userJoined = new Subject;
  userName: any = '';
  members: UserAdded[] = [];

  constructor( private authService: AuthService, private wsService: WebSocketService ) {
    this.userJoined.subscribe(
      username => {
        this.userName = username;
      }
    );

    this.wsService.messageReceived.subscribe(
      (data: UserAdded) => {
        // this.members.push(message);
        console.log(data);

        // console.log('Updated members array: ', obj);
      }
    );


  }

  newUser(username) {
    this.userName = username;
    this.authService.login();
    this.userJoined.next(this.userName);
  }

}

//https://stackoverflow.com/questions/13028604/sending-a-javascript-object-through-websockets-with-faye/13034191
