import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WellcomeComponent } from './home/wellcome/wellcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WellcomeComponent },
      {
        path: 'diary',
        loadChildren: () =>
          import('./diary/diary.module').then(m => m.DiaryModule)
      },
      { path: '', redirectTo: 'diary', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ],
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }