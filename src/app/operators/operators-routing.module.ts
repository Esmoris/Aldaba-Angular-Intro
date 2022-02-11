import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OperatorsComponent } from "./operators.component";

const routes: Routes = [
  { path: "", component: OperatorsComponent },
  { path: "new", loadChildren: () => import("./new-operator/new-operator.module").then((m) => m.NewOperatorModule) },
  { path: ":id", loadChildren: () => import("./view-operator/view-operator.module").then((m) => m.ViewOperatorModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule {}
