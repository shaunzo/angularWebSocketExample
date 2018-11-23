import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  message = {
    username: '',
    message: ''
  };

  constructor( private chatService: ChatService) { }

  ngOnInit() {
    this.message.username = this.chatService.user.userName;
  }

  onKeyDown() {
    this.chatService.sendMsg('user-typing', this.chatService.user.userName);
    console.log('Chat message: ', this.message);
  }

  addMessage() {
    console.log('Pressed Enter!!');
  }

}
