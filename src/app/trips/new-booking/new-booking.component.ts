import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BookingsService } from "src/app/core/bookings.service";
import { BookingStatus } from "src/app/models/booking";
import { ValidationsService } from "src/app/validations.service";

@Component({
  selector: "app-new-booking",
  templateUrl: "./new-booking.component.html",
  styleUrls: ["./new-booking.component.css"],
})
export class NewBookingComponent implements OnInit {
  public form: FormGroup;
  public bookingStatusKeys = Object.keys(BookingStatus);
  public bookingStatus = BookingStatus;

  constructor(
    route: ActivatedRoute,
    formBuilder: FormBuilder,
    private validations: ValidationsService,
    private bookingService: BookingsService,
  ) {
    const tripId = route.snapshot.paramMap.get("id");
    this.form = formBuilder.group({
      tripId: new FormControl(tripId, Validators.required),
      travelerId: new FormControl("alberto@aldaba.com", [Validators.required, Validators.email]),
      passengersCount: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(6)]),
      status: new FormControl("REQUESTED"),
      hasPremiumFoods: new FormControl(false),
      paymentId: new FormControl(undefined),
    });
  }

  ngOnInit(): void {}

  public hasError(controlName: string): boolean {
    return this.validations.hasError(this.form, controlName);
  }

  public hasErrorMessage(controlName: string): boolean {
    return this.validations.hasErrorMessage(this.form, controlName);
  }

  public getError(controlName: string): string {
    return this.validations.getError(this.form, controlName);
  }

  public onSubmitClick() {
    // this.bookingService.postBooking(this.form.value);
    this.bookingService.postBooking$(this.form.value).subscribe((response) => console.log(response));
  }
}
