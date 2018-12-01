import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { WebsocketService } from '../../websocket.service';
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

  constructor( private chatService: ChatService, private wsService: WebsocketService) { }

  ngOnInit() {
    this.message.username = this.chatService.user.userName;
  }

  onKeyDown() {
    this.chatService.sendMsg('user-typing', this.chatService.user.userName);
  }

  addChatMessage() {
    this.chatService.sendMsg('chat-message', this.message);
    this.message.message = '';
  }

}
