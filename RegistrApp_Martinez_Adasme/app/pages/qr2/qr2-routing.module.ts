import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qr2Page } from './qr2.page';

const routes: Routes = [
  {
    path: '',
    component: Qr2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qr2PageRoutingModule {}
