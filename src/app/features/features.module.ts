import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ListComponent } from './list/list/list.component';
import { FormComponent } from './form/form/form.component';
import { EditComponent } from './edit/edit/edit.component';
import { ViewComponent } from './view/view/view.component';



@NgModule({
  declarations: [ButtonComponent, ListComponent, FormComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
