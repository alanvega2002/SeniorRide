import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesRealizadosPage } from './viajes-realizados.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesRealizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesRealizadosPageRoutingModule {}
