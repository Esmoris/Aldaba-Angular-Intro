import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BookingStatus } from "src/app/models/booking";

@Component({
  selector: "app-new-booking",
  templateUrl: "./new-booking.component.html",
  styleUrls: ["./new-booking.component.css"],
})
export class NewBookingComponent implements OnInit {
  public form: FormGroup;
  public bookingStatusKeys = Object.keys(BookingStatus);
  public bookingStatus = BookingStatus;

  constructor(route: ActivatedRoute, formBuilder: FormBuilder) {
    const tripId = route.snapshot.paramMap.get("id");

    this.form = formBuilder.group({
      tripId: new FormControl(tripId, Validators.required),
      travelerId: new FormControl("", [Validators.required, Validators.email]),
      passengersCount: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(6)]),
      status: new FormControl("REQUESTED"),
      hasPremiumFoods: new FormControl(false),
      paymentId: new FormControl(undefined),
    });
  }

  ngOnInit(): void {}

  public hasError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control.invalid;
  }

  public hasErrorMessage(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control.touched && control.invalid;
  }

  public getError(controlName: string): string {
    const control = this.form.get(controlName);
    if (control.touched && control.invalid) {
      const errors = control.errors;
      let msg = "";
      msg += errors.required ? "El campo es requerido " : " ";
      msg += errors.email ? "El campo debe ser un email " : " ";
      msg += errors.minlength ? `El campo debe tener al menos ${errors.minlength.requiredLength} caracteres ` : " ";
      msg += errors.maxlength ? `El campo no debe tener más de ${errors.maxlength.requiredLength} caracteres ` : " ";
      msg += errors.min ? `El campo debe ser mayor que ${errors.min.min} ` : " ";
      msg += errors.max ? `El campo debe ser menor que ${errors.max.max} ` : " ";
      return msg;
    }
    return "";
  }

  public onSubmitClick() {
    console.log(this.form.value);
  }
}
