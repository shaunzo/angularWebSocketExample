import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Angular Material imports
import {MatToolbarModule} from '@angular/material/toolbar';
// import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatroomModule } from './chatroom/chatroom.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   //  ChatroomComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    ChatroomModule
  ],
  providers: [
    ChatService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
