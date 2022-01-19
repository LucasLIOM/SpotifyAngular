import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FeaturesRouting } from './features-routing.module';
import { SearchModule } from './search/search.module';
import { ListModule } from './search/listdown/list.module';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    FeaturesRouting,
    SearchModule,
    ListModule
  ]
})
export class FeaturesModule { }
