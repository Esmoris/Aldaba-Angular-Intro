import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Booking } from "../models/booking";

@Injectable({
  providedIn: "root",
})
export class BookingsService {
  public bookings: Booking[] = [];

  constructor(private httpClient: HttpClient) {}

  public postBooking(booking: Booking) {
    console.log({ reserva: booking });
    this.bookings.push(booking);
    console.log({ lista: this.bookings });
  }
  public postBooking$(booking: Booking): Observable<Booking> {
    console.log({ posting: booking });
    return this.httpClient.post<Booking>("http://localhost:3000/bookings", booking);
  }
}
