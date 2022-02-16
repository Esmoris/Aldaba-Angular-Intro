import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Operator } from "src/app/models/operator";
import { OperatorsService } from "../operators.service";

@Component({
  selector: "app-view-operator",
  templateUrl: "./view-operator.component.html",
  styleUrls: ["./view-operator.component.css"],
})
export class ViewOperatorComponent implements OnInit {
  public operator: Operator;

  constructor(route: ActivatedRoute, operatorsService: OperatorsService) {
    const operatorId = route.snapshot.params["id"];
    this.operator = operatorsService.getOperatorById(operatorId);
  }
  ngOnInit(): void {}
}
