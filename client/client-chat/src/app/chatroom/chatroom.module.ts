import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomComponent } from './chatroom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChatroomComponent
  ],
  exports: [
    ChatroomComponent
  ]
})
export class ChatroomModule { }
