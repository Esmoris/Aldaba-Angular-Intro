import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../core/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(formBuilder: FormBuilder, private loginService: LoginService) {
    this.form = formBuilder.group({
      email: ["alberto@aldaba.es", [Validators.required, Validators.email]],
      password: ["secret", [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {}

  public onSubmitClick() {
    // console.log(this.form.value);
    this.loginService.postCredentials(this.form.value).subscribe(
      (data) => console.log(data),
      (error) => {
        console.log(error);
        console.log(error.status);
      },
    );
  }
}
