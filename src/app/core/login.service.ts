import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginCredentials } from "../models/loginCredentials";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  public postCredentials(credentials: LoginCredentials): Observable<LoginCredentials> {
    return this.httpClient.post<LoginCredentials>("http://localhost:3000/login", credentials);
  }
}
