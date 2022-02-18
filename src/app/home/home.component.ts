import { Component, OnInit } from "@angular/core";
import { filter, map, tap } from "rxjs/operators";
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
  public destination: string = "moon";
  public bookingsCount: number = 0;

  constructor(private tripsService: TripsService, private bookingsService: BookingsService) {
    this.bookingsCount = this.bookingsService.bookings.length;
    // this.trips = this.tripsService.getTrips();
    // this.tripsService.getTrips$().subscribe((trips) => (this.trips = trips));
  }

  ngOnInit(): void {}

  public getTripClass(trip: Trip): string {
    return this.tripsService.getTripClass(trip);
  }
  public canReserveBooking(trip: Trip): boolean {
    return this.tripsService.canReserveBooking(trip);
  }
  public searchTrips(): void {
    console.log(this.destination);
    this.tripsService
      .getTrips$()
      .pipe(
        tap((data) => console.log(data)),
        filter((data) => data.length > 0),
        tap((data) => console.log(data)),
        map((data) =>
          data.filter((trip) => trip.destination.toLocaleLowerCase().includes(this.destination.toLocaleLowerCase())),
        ),
        tap((data) => console.log(data)),
      )
      .subscribe((trips) => (this.trips = trips));
  }
}
