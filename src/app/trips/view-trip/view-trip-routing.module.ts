import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTripComponent } from './view-trip.component';

const routes: Routes = [{ path: '', component: ViewTripComponent }, { path: 'trips/:id/booking', loadChildren: () => import('../new-booking/new-booking.module').then(m => m.NewBookingModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTripRoutingModule { }
