import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alumno2PageRoutingModule } from './alumno2-routing.module';

import { Alumno2Page } from './alumno2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alumno2PageRoutingModule
  ],
  declarations: [Alumno2Page]
})
export class Alumno2PageModule {}
