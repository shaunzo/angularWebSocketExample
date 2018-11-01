import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  joinedChat = false;

  constructor( private router: Router ) {
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.joinedChat);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    console.log('User LOgged in');
     this.joinedChat = true;
     this.router.navigate(['chat']);
  }

  logout() {
    console.log('User LOgged out');
    this.joinedChat = false;

  }
}
