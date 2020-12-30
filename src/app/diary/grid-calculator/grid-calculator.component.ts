import { Component, OnInit } from "@angular/core";
export enum ACTIVE_OPTIONS {
  Expression = 0,
  PrimaryActionExpression = 1,
  AlternateExpression = 2,
}
@Component({
  selector: "app-grid-calculator",
  templateUrl: "./grid-calculator.component.html",
  styleUrls: ["./grid-calculator.component.scss"],
})
export class GridCalculatorComponent implements OnInit {
  ACTIVE_OPTIONS = ACTIVE_OPTIONS;
  enable: ACTIVE_OPTIONS;
  LessThanOperator = "<";
  LessThanEqualOperator = "<=";
  selectedExpression = "POR<10";
  primaryActionExpression = "POR * 0.5";
  alternateExpression = "POR";
  isSetAutoFocus: boolean = false;
  constructor() {}
  ngOnInit(): void {
    this.enable = ACTIVE_OPTIONS.Expression;
    this.addElement(this.enable);
  }

  getOperator(item) {
    if (this.enable == ACTIVE_OPTIONS.Expression) {
      this.selectedExpression += item;
    }
    if (this.enable == ACTIVE_OPTIONS.PrimaryActionExpression) {
      this.primaryActionExpression += item;
    }
    if (this.enable == ACTIVE_OPTIONS.AlternateExpression) {
      this.alternateExpression += item;
    }
  }
  addElement(type) {
    if (type == ACTIVE_OPTIONS.Expression) {
      this.enable = type;
    }
    if (type == ACTIVE_OPTIONS.PrimaryActionExpression) {
      this.enable = type;
    }
    if (type == ACTIVE_OPTIONS.AlternateExpression) {
      this.enable = type;
    }
  }
  clear() {
    if (this.enable == ACTIVE_OPTIONS.Expression) {
      this.selectedExpression = "";
    }
    if (this.enable == ACTIVE_OPTIONS.PrimaryActionExpression) {
      this.primaryActionExpression = "";
    }
    if (this.enable == ACTIVE_OPTIONS.AlternateExpression) {
      this.alternateExpression = "";
    }
  }
  save() {
    console.log(
      "generaed expression",
      this.selectedExpression,
      this.primaryActionExpression,
      this.alternateExpression
    );
  }
}
