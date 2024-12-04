import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarViajePage } from './agendar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarViajePageRoutingModule {}
