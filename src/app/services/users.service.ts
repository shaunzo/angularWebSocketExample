import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  userJoined = new Subject;
  userName = '';

  constructor() {
  }

}
