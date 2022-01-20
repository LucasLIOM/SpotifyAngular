import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routes';



@NgModule({
  declarations: [],
  imports:      [CommonModule,RouterModule.forChild(LoginRoutes)],
  exports:      [RouterModule]
})
export class LoginModule { }
