import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { DiaryCreateEditComponent } from './diary-create-edit/diary-create-edit.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExportDataAsJsonComponent } from './export-data-as-json/export-data-as-json.component';
import { GridCalculatorComponent } from './grid-calculator/grid-calculator.component';

@NgModule({
  declarations: [DiaryListComponent, DiaryCreateEditComponent, ExportDataAsJsonComponent, GridCalculatorComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: GridCalculatorComponent
      },
      {
        path:'export',
        component:ExportDataAsJsonComponent
      },
      {
        path: ':id/edit',
        component: DiaryCreateEditComponent,
      }]),
    CommonModule
  ]
})
export class DiaryModule { }
