import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../types/chatMessage';
import { ChatService } from '../../chat.service';
import { WebsocketService } from '../../websocket.service';

@Component({
  selector: 'app-chatterbox',
  templateUrl: './chatterbox.component.html',
  styleUrls: ['./chatterbox.component.scss']
})
export class ChatterboxComponent implements OnInit {

  chatMessages: ChatMessage[] = [];

  constructor( private chatService: ChatService, private wsService: WebsocketService ) {}

  ngOnInit() {
    this.wsService.chatMessage.subscribe(
      (data: any) => {
        this.chatMessages.push({
          username: data.username,
          message: data.message
        });
      }
    );
  }

}
