import { Injectable } from "@angular/core";
import { TRIPS } from "../data/astro_bookings";
import { Trip, TripKinds } from "../models/trip";

@Injectable({
  providedIn: "root",
})
export class TripsService {
  private trips: Trip[] = TRIPS;

  constructor() {}

  public getTrips(): Trip[] {
    return this.trips;
  }
  public getTripById(id: string): Trip {
    return this.trips.find((t) => t.id === id);
  }
  public getTripClass(trip: Trip): string {
    const tripOnly = TripKinds[TripKinds.TRIP_ONLY];
    return trip.kind.toString() == tripOnly ? "trip_only" : "with_stay";
  }
  public canReserveBooking(trip: Trip): boolean {
    return trip.places > 0;
  }
}
