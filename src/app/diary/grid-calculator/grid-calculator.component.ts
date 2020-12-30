import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-calculator',
  templateUrl: './grid-calculator.component.html',
  styleUrls: ['./grid-calculator.component.scss']
})
export class GridCalculatorComponent implements OnInit {
  LessThanOperator='<';
  LessThanEqualOperator='<=';
  selectedExpression = 'POR<10';
  primaryActionExpression='POR * 0.5';
  alternateExpression='POR';
  constructor() { }
  ngOnInit(): void {
  }
  getOperator(item) {
    this.selectedExpression+=item;
  }
  clear() {
    this.selectedExpression='';
  }
  save() {

  }
}
