import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-new-booking",
  templateUrl: "./new-booking.component.html",
  styleUrls: ["./new-booking.component.css"],
})
export class NewBookingComponent implements OnInit {
  public form: FormGroup;

  constructor(route: ActivatedRoute, formBuilder: FormBuilder) {
    const tripId = route.snapshot.paramMap.get("id");
    this.form = formBuilder.group({
      tripId: new FormControl(tripId, Validators.required),
      travelerId: new FormControl("", [Validators.required, Validators.email]),
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
      let msg = "";
      msg += control.errors.required ? "El campo es requerido " : " ";
      msg += control.errors.email ? "El campo debe ser un email " : " ";
      msg += control.errors.minlength
        ? `El campo debe tener al menos ${control.errors.minlength.requiredLength} caracteres `
        : " ";
      return msg;
    }
    return "";
  }

  public onSubmitClick() {
    console.log(this.form.value);
  }
}
