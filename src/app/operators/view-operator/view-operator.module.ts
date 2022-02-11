import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOperatorRoutingModule } from './view-operator-routing.module';
import { ViewOperatorComponent } from './view-operator.component';


@NgModule({
  declarations: [ViewOperatorComponent],
  imports: [
    CommonModule,
    ViewOperatorRoutingModule
  ]
})
export class ViewOperatorModule { }
