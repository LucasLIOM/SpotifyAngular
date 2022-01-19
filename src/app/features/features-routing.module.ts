import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    loadChildren: async () =>
      import('./search/search.module').then((m) => m.SearchModule),
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FeaturesRouting { }
