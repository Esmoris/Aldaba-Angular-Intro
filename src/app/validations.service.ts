import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ValidationsService {
  constructor() {}

  public hasError(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return control.invalid;
  }

  public hasErrorMessage(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return control.touched && control.invalid;
  }

  public getError(form: FormGroup, controlName: string): string {
    const control = form.get(controlName);
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
}
