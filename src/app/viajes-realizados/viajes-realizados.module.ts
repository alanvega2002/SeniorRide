import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesRealizadosPageRoutingModule } from './viajes-realizados-routing.module';

import { ViajesRealizadosPage } from './viajes-realizados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesRealizadosPageRoutingModule
  ],
  declarations: [ViajesRealizadosPage]
})
export class ViajesRealizadosPageModule {}
