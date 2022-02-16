import { Component, OnInit } from "@angular/core";
import { BookingsService } from "../bookings.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  public title = "aldaba angular intro";
  public bookingsCount: number = 0;
  constructor(private bookingsService: BookingsService) {
    this.bookingsCount = this.bookingsService.bookings.length;
  }

  ngOnInit(): void {}
}
