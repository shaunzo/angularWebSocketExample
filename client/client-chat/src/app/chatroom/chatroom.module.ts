import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomComponent } from './chatroom.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import {MatFormFieldModule, MatInputModule } from '@angular/material';
import { ChatterboxComponent } from './chatterbox/chatterbox.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ChatroomComponent,
    ChatInputComponent,
    ChatterboxComponent
  ],
  exports: [
    ChatroomComponent
  ]
})
export class ChatroomModule { }
