import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email, Validators.minLength(6)]),
      message: ["Quiero más información", [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {}

  public onSubmitClick() {
    console.log(this.form.value);
  }

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
      // 1 return JSON.stringify(control.errors);
      let msg = "";
      // 2 Object.keys(control.errors).forEach((key) => {
      //   msg += key + " ";
      // });
      msg += control.errors.required ? "El campo es requerido " : " ";
      msg += control.errors.email ? "El campo debe ser un email " : " ";
      msg += control.errors.minlength
        ? `El campo debe tener al menos ${control.errors.minLength.requiredLength} caracteres `
        : " ";
      return msg;
    }
    return "";
  }
} // {"minlength":{"requiredLength":10,"actualLength":3}}
