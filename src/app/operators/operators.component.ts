import { Component, OnInit } from "@angular/core";
import { OPERATORS } from "../data/astro_bookings";
import { Operator, OperatorRanges, OperatorStatus } from "../models/operator";

@Component({
  selector: "app-operators",
  templateUrl: "./operators.component.html",
  styleUrls: ["./operators.component.css"],
})
export class OperatorsComponent implements OnInit {
  public operators: Operator[] = OPERATORS;

  constructor() {}

  ngOnInit(): void {}

  public getOperatorClass(operator: Operator): string {
    const active = OperatorStatus[OperatorStatus.ACTIVE];
    return operator.status.toString() == active ? "active" : "pending";
  }
  public getOperatorIcon(operator: Operator): string {
    const orbital = OperatorRanges[OperatorRanges.ORBITAL];
    return operator.range.toString() == orbital ? "🌍" : "💫";
  }
}
