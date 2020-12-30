import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesLayoutComponent } from './causes-layout.component';

describe('CausesLayoutComponent', () => {
  let component: CausesLayoutComponent;
  let fixture: ComponentFixture<CausesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CausesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CausesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
