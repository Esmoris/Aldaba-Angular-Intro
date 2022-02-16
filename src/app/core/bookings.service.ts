import { Injectable } from "@angular/core";
import { Booking } from "../models/booking";

@Injectable({
  providedIn: "root",
})
export class BookingsService {
  constructor() {}

  public postBooking(booking: Booking) {
    console.log(booking);
  }
}
