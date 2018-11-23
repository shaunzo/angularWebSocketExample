import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent  } from './login.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent],
  providers: [
  ]
})

export class LoginModule {}
