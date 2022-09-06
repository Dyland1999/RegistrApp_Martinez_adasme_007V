import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvcontPageRoutingModule } from './olvcont-routing.module';

import { OlvcontPage } from './olvcont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvcontPageRoutingModule
  ],
  declarations: [OlvcontPage]
})
export class OlvcontPageModule {}
