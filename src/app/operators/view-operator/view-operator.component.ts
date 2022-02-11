import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OPERATORS } from "src/app/data/astro_bookings";
import { Operator } from "src/app/models/operator";

@Component({
  selector: "app-view-operator",
  templateUrl: "./view-operator.component.html",
  styleUrls: ["./view-operator.component.css"],
})
export class ViewOperatorComponent implements OnInit {
  public operator: Operator;

  constructor(route: ActivatedRoute) {
    const operatorId = route.snapshot.params["id"];
    const operators: Operator[] = OPERATORS;
    this.operator = operators.find((o) => o.id === operatorId);
  }
  ngOnInit(): void {}
}
