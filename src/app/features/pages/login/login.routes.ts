import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "../../features.routes";
import { LoginComponent } from "../../pages/login/login.component";


export const LoginRoutes: Routes = [

  {
    path: '',
    component: LoginComponent,
  }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
