import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TRIPS } from "src/app/data/astro_bookings";
import { Trip } from "src/app/models/trip";

@Component({
  selector: "app-view-trip",
  templateUrl: "./view-trip.component.html",
  styleUrls: ["./view-trip.component.css"],
})
export class ViewTripComponent implements OnInit {
  public trip: Trip;
  constructor(route: ActivatedRoute) {
    const trips: Trip[] = TRIPS;
    const tripId = route.snapshot.params["id"];
    this.trip = trips.find((t) => t.id === tripId);
  }

  ngOnInit(): void {}
}
