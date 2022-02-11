import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTripRoutingModule } from './view-trip-routing.module';
import { ViewTripComponent } from './view-trip.component';


@NgModule({
  declarations: [ViewTripComponent],
  imports: [
    CommonModule,
    ViewTripRoutingModule
  ]
})
export class ViewTripModule { }
