import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Operator } from "../models/operator";
import { OperatorsService } from "./operators.service";

@Component({
  selector: "app-operators",
  templateUrl: "./operators.component.html",
  styleUrls: ["./operators.component.css"],
})
export class OperatorsComponent implements OnInit {
  //public operators: Operator[];
  public operators$: Observable<Operator[]>;

  constructor(private operatorsService: OperatorsService) {
    //this.operators = this.operatorsService.getOperators();
    this.operators$ = this.operatorsService.getOperators$();
  }

  ngOnInit(): void {}

  public getOperatorClass(operator: Operator): string {
    return this.operatorsService.getOperatorClass(operator);
  }
  public getOperatorIcon(operator: Operator): string {
    return this.operatorsService.getOperatorIcon(operator);
  }
}
