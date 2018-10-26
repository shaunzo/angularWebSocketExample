import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinChatComponent } from './join-chat/join-chat.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: JoinChatComponent },
  { path: 'chat', canActivate: [AuthGuard], component: ChatRoomComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
