import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "logout",
    loadChildren: () => import("./logout/logout.module").then((m) => m.LogoutModule),
  },
  {
    path: "bookings",
    loadChildren: () => import("./bookings/bookings.module").then((m) => m.BookingsModule),
  },
  {
    path: "operators",
    loadChildren: () => import("./operators/operators.module").then((m) => m.OperatorsModule),
  },
  {
    path: "trips/:id",
    loadChildren: () => import("./trips/view-trip/view-trip.module").then((m) => m.ViewTripModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
