import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PermissionGuard } from '../core/guards/permission.guard';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [PermissionGuard],
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then((m) => m.PlayerModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]

@NgModule({
  declarations: [],
  imports:      [CommonModule]
})
export class FeaturesRoutes { }
