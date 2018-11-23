import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatroomModule } from './chatroom/chatroom.module';
import { LoginModule  } from './login/login.module';
// import { ChatInputModule } from './chatroom/chat-input/chat-input.module'
// import { AuthGuard } from './auth-guard.service';
// import { AuthService  } from './auth.service';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [
    // AuthGuard,
    // AuthService,
    ChatService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
