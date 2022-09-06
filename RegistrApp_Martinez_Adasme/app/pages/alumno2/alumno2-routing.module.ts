import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alumno2Page } from './alumno2.page';

const routes: Routes = [
  {
    path: '',
    component: Alumno2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alumno2PageRoutingModule {}
