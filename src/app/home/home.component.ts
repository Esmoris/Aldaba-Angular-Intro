import { Component, OnInit } from "@angular/core";
import { BookingsService } from "../core/bookings.service";
import { Trip } from "../models/trip";
import { TripsService } from "../trips/trips.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public trips: Trip[];
  public bookingsCount : Number =0;


  constructor(private tripsService: TripsService, private bookingsService: BookingsService) {
    this.bookingsCount = this.bookingsService.bookings.length;
    // this.trips = this.tripsService.getTrips();
    this.tripsService.getTrips$().subscribe((trips) => (this.trips = trips));
  }

  ngOnInit(): void {}

  public getTripClass(trip: Trip): string {
    return this.tripsService.getTripClass(trip);
  }
  public canReserveBooking(trip: Trip): boolean {
    return this.tripsService.canReserveBooking(trip);
  }
}
