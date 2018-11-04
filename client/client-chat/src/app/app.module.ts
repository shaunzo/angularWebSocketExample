import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ChatService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
