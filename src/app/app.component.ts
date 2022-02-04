import { Component } from "@angular/core";
import { TRIPS } from "./data/trips";
import { Trip } from "./models/trip";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "aldaba-angular-intro";
  public trips: Trip[] = TRIPS;
  constructor() {
    console.log(this.trips);
  }
}
