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
    if (this.username === '') {
      this.joinDisabled = true;
    } else {
      this.joinDisabled = false;
    }
  }

  joinChat() {
    this.chatService.username.next(this.username);
    this.router.navigate(['/chat']);
  }

}
