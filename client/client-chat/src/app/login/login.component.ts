import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String = '';
  joinDisabled: Boolean = true;

  constructor( private router: Router, private chatService: ChatService) { }

  ngOnInit() {
  }

  onInput() {
    console.log(this.username);
    if (this.username === '') {
      this.joinDisabled = true;
    } else {
      this.joinDisabled = false;
    }
  }

  joinChat() {
    console.log('Clicked Login');
    this.chatService.username.next(this.username);
    this.router.navigate(['/chat']);
  }

}
