import { Injectable } from "@angular/core";
import { OPERATORS } from "../data/astro_bookings";
import { Operator, OperatorRanges, OperatorStatus } from "../models/operator";

@Injectable({
  providedIn: "root",
})
export class OperatorsService {
  private operators: Operator[] = OPERATORS;
  constructor() {}

  public getOperators(): Operator[] {
    return this.operators;
  }

  public getOperatorClass(operator: Operator): string {
    const active = OperatorStatus[OperatorStatus.ACTIVE];
    return operator.status.toString() == active ? "active" : "pending";
  }
  public getOperatorIcon(operator: Operator): string {
    const orbital = OperatorRanges[OperatorRanges.ORBITAL];
    return operator.range.toString() == orbital ? "🌍" : "💫";
  }
}
