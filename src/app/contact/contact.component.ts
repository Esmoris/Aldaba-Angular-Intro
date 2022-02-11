import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      message: ["Quiero más información", [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {}

  public onSubmitClick() {
    console.log(this.form.value);
  }
}
