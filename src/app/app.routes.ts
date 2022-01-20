import { Routes } from "@angular/router"

export const AppRoutes: Routes = [
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/pages/login/login.module').then(x => x.LoginModule)
  }
]
