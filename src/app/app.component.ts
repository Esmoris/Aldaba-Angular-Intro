import { Component } from "@angular/core";
import { OPERATORS, TRIPS } from "./data/astro_bookings";
import { Operator, OperatorStatus } from "./models/operator";
import { Trip, TripKinds } from "./models/trip";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "aldaba-angular-intro";
  public trips: Trip[] = TRIPS;
  public operators: Operator[] = OPERATORS;
  constructor() {
    console.log(this.trips);
  }

  public getOperatorClass( operator: Operator) : string{
    const active = OperatorStatus [OperatorStatus.ACTIVE];
    return operator.status.toString() == active ? "active":"pending" ;
  }

  public getFlightsClass( trip: Trip) : string{
    const tripOnly = TripKinds [TripKinds.TRIP_ONLY];
    return trip.kind.toString() == tripOnly ? "idaVuelta":"conEstancia" ;
  }

}
