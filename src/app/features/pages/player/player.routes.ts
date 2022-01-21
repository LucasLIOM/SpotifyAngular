import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "../../features.routes";
import { PlayerComponent } from "./player.component";


export const PlayerRoutes: Routes = [
  {
    path: '',
    component: PlayerComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
