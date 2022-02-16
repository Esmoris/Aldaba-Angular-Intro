import { Injectable } from "@angular/core";
import { Booking } from "../models/booking";

@Injectable({
  providedIn: "root",
})
export class BookingsService {
  public bookings: Booking[] = [];

  constructor() {}

  public postBooking(booking: Booking) {
    console.log(booking);
    this.bookings.push(booking);
  }
}
