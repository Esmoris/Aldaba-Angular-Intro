import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ["a@b.c", [Validators.required, Validators.email]],
      password: ["secret", [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {}

  public onSubmitClick() {
    console.log(this.form.value);
  }
}
