import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NewBookingRoutingModule } from "./new-booking-routing.module";
import { NewBookingComponent } from "./new-booking.component";

@NgModule({
  declarations: [NewBookingComponent],
  imports: [CommonModule, NewBookingRoutingModule, ReactiveFormsModule],
})
export class NewBookingModule {}
