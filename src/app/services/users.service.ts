import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { WebSocketService  } from '../services/webSocket.service';
import { UserAddedMessage } from '../types/userAdded';

@Injectable()
export class UsersService {
  userJoined = new Subject;
  userName: any = '';
  members = [];
  message: UserAddedMessage;

  constructor( private authService: AuthService, private wsService: WebSocketService ) {
    this.userJoined.subscribe(
      username => {
        this.userName = username;
      }
    );

    this.wsService.messageReceived.subscribe(
      data => {
        const regex = /":"|","/g;
        const dataStr = data.toString()
                            .replace('{"', '')
                            .replace('"}', '')
                            .replace(regex, ',');
        const dataArr = dataStr.split(',');

        // Message converted to object
        this.message = {
          name: dataArr[1],
          user: dataArr[3],
          message: dataArr[5]
        };
        console.log('Message converted to object: ', this.message);
      }
    );


  }

  newUser(username) {
    this.userName = username;
    this.authService.login();
    this.userJoined.next(this.userName);
  }

}

// https://stackoverflow.com/questions/13028604/sending-a-javascript-object-through-websockets-with-faye/13034191
