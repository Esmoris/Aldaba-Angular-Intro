import { Component, OnInit } from "@angular/core";
import { Trip } from "../models/trip";
import { TripsService } from "../trips/trips.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public trips: Trip[];

  constructor(private tripsService: TripsService) {
    this.trips = this.tripsService.getTrips();
  }

  ngOnInit(): void {}

  public getTripClass(trip: Trip): string {
    return this.tripsService.getTripClass(trip);
  }
  public canReserveBooking(trip: Trip): boolean {
    return this.tripsService.canReserveBooking(trip);
  }
}
