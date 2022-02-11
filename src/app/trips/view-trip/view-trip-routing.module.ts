import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTripComponent } from './view-trip.component';

const routes: Routes = [{ path: '', component: ViewTripComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTripRoutingModule { }
