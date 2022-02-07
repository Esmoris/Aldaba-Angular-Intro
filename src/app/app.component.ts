import { Component } from "@angular/core";
import { OPERATORS, TRIPS } from "./data/astro_bookings";
import { Operator, OperatorStatus } from "./models/operator";
import { Trip } from "./models/trip";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public title = "aldaba angular intro";
  public operators: Operator[] = OPERATORS;
  public trips: Trip[] = TRIPS;
  constructor() {
    console.log(this.trips);
  }
  public getOperatorClass(operator: Operator): string {
    return operator.status == OperatorStatus.ACTIVE ? "active" : "pending";
  }
}
