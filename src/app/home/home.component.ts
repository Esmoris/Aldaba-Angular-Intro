import { Component, OnInit } from "@angular/core";
import { OPERATORS, TRIPS } from "../data/astro_bookings";
import { Operator, OperatorRanges, OperatorStatus } from "../models/operator";
import { Trip, TripKinds } from "../models/trip";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public operators: Operator[] = OPERATORS;
  public trips: Trip[] = TRIPS;
  constructor() {}

  ngOnInit(): void {}

  public getOperatorClass(operator: Operator): string {
    const active = OperatorStatus[OperatorStatus.ACTIVE];
    return operator.status.toString() == active ? "active" : "pending";
  }
  public getOperatorIcon(operator: Operator): string {
    const orbital = OperatorRanges[OperatorRanges.ORBITAL];
    return operator.range.toString() == orbital ? "🌍" : "💫";
  }
  public getTripClass(trip: Trip): string {
    const tripOnly = TripKinds[TripKinds.TRIP_ONLY];
    return trip.kind.toString() == tripOnly ? "trip_only" : "with_stay";
  }
  public canReserveBooking(trip: Trip): boolean {
    return trip.places > 0;
  }
}
