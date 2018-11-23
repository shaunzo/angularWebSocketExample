import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard  } from './auth-guard.service';

const appRoutes: Routes = [
  // { path: '', canActivate: [ AuthGuard ], component: ChatroomComponent},
  { path: '', component: LoginComponent},
  { path: 'chat', component: ChatroomComponent}
];
// LoginComponent
// ChatroomComponent

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})

export class AppRoutingModule {

}
