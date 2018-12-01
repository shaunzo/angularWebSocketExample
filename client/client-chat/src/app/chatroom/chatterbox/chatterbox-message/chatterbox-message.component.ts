import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../../types/chatMessage';

@Component({
  selector: 'app-chatterbox-message',
  templateUrl: './chatterbox-message.component.html',
  styleUrls: ['./chatterbox-message.component.scss']
})
export class ChatterboxMessageComponent implements OnInit {

  @Input() username: string;
  @Input() chatMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
