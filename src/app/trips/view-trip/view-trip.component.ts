import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Trip } from "src/app/models/trip";
import { TripsService } from "../trips.service";

@Component({
  selector: "app-view-trip",
  templateUrl: "./view-trip.component.html",
  styleUrls: ["./view-trip.component.css"],
})
export class ViewTripComponent implements OnInit {
  // public trip: Trip;
  public trip$: Observable<Trip>;
  constructor(route: ActivatedRoute, tripsService: TripsService) {
    // const tripId = route.snapshot.params["id"];
    // this.trip = tripsService.getTripById(tripId);

    route.params.subscribe((params) => {
      const tripId = params["id"];
      this.trip$ = tripsService.getTripById$(tripId);
    });
  }

  ngOnInit(): void {}
}
