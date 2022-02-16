import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TRIPS } from "../data/astro_bookings";
import { Trip, TripKinds } from "../models/trip";

@Injectable({
  providedIn: "root",
})
export class TripsService {
  private trips: Trip[] = TRIPS;

  constructor(private httpClient: HttpClient) {}

  public getTrips(): Trip[] {
    return this.trips;
  }
  public getTrips$(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>("http://localhost:3000/trips");
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
