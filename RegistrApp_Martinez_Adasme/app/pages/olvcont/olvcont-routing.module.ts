import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvcontPage } from './olvcont.page';

const routes: Routes = [
  {
    path: '',
    component: OlvcontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvcontPageRoutingModule {}
