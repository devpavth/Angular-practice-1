import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsPage } from './reactive-forms.page';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormsPageRoutingModule {}
