import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Angular Material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

// import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatroomModule } from './chatroom/chatroom.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    ChatroomModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [
    ChatService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
