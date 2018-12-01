import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomComponent } from './chatroom.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import {MatFormFieldModule, MatInputModule } from '@angular/material';
import { ChatterboxComponent } from './chatterbox/chatterbox.component';
import { FormsModule } from '@angular/forms';
import { ChatterboxMessageComponent } from './chatterbox/chatterbox-message/chatterbox-message.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    ChatroomComponent,
    ChatInputComponent,
    ChatterboxComponent,
    ChatterboxMessageComponent
  ],
  exports: [
    ChatroomComponent
  ]
})
export class ChatroomModule { }
