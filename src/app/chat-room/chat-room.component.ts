import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  @Input() userName: string;


  constructor() { }

  ngOnInit() {
  }

}
