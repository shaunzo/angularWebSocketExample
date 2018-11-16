import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  constructor( private chatService: ChatService) { }

  ngOnInit() {
  }

  onKeyDown() {
    this.chatService.sendMsg('user-typing', this.chatService.user.userName);
  }

}
