import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOperatorComponent } from './view-operator.component';

const routes: Routes = [{ path: '', component: ViewOperatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewOperatorRoutingModule { }
