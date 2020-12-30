import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCalculatorComponent } from './grid-calculator.component';

describe('GridCalculatorComponent', () => {
  let component: GridCalculatorComponent;
  let fixture: ComponentFixture<GridCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
