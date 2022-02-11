import { Component, OnInit } from "@angular/core";
import { TRIPS } from "../data/astro_bookings";
import { Trip, TripKinds } from "../models/trip";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public trips: Trip[] = TRIPS;
  constructor() {}

  ngOnInit(): void {}

  public getTripClass(trip: Trip): string {
    const tripOnly = TripKinds[TripKinds.TRIP_ONLY];
    return trip.kind.toString() == tripOnly ? "trip_only" : "with_stay";
  }
  public canReserveBooking(trip: Trip): boolean {
    return trip.places > 0;
  }
}
