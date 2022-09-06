import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qr2PageRoutingModule } from './qr2-routing.module';

import { Qr2Page } from './qr2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qr2PageRoutingModule
  ],
  declarations: [Qr2Page]
})
export class Qr2PageModule {}
