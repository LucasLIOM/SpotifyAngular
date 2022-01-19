import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FeaturesRouting } from './features-routing.module';
import { SearchModule } from './search/search.module';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    FeaturesRouting,
    SearchModule,
  ]
})
export class FeaturesModule { }
