import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OPERATORS } from "../data/astro_bookings";
import { Operator, OperatorRanges, OperatorStatus } from "../models/operator";

@Injectable({
  providedIn: "root",
})
export class OperatorsService {
  private operators: Operator[] = OPERATORS;

  constructor(private httpClient: HttpClient) {}

  public getOperators(): Operator[] {
    return this.operators;
  }
  public getOperators$(): Observable<Operator[]> {
    return this.httpClient.get<Operator[]>("http://localhost:3000/operators");
  }
  public getOperatorById(id: string): Operator {
    return this.operators.find((o) => o.id === id);
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
