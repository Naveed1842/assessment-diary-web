import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDataAsJsonComponent } from './export-data-as-json.component';

describe('ExportDataAsJsonComponent', () => {
  let component: ExportDataAsJsonComponent;
  let fixture: ComponentFixture<ExportDataAsJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportDataAsJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDataAsJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
