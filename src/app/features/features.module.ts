import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutes } from './features.routes';
import { LoginModule } from './pages/login/login.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, FeaturesRoutes]
})
export class FeaturesModule { }

