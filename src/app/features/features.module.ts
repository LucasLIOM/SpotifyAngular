import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutes } from './features.routes';
import { LoginModule } from './pages/login/login.module';
import { PlayerComponent } from './pages/player/player.component';


@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, LoginModule, FeaturesRoutes]
})
export class FeaturesModule { }

