import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarViajePageRoutingModule } from './agendar-viaje-routing.module';

import { AgendarViajePage } from './agendar-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarViajePageRoutingModule
  ],
  declarations: [AgendarViajePage]
})
export class AgendarViajePageModule {}
