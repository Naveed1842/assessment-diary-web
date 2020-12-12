import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryCreateEditComponent } from './diary-create-edit.component';

describe('DiaryCreateEditComponent', () => {
  let component: DiaryCreateEditComponent;
  let fixture: ComponentFixture<DiaryCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
