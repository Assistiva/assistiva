import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaboratorioTaComponent } from './laboratorio-ta.component';

const routes: Routes = [
  {
    path: '',
    component: LaboratorioTaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratorioTaRoutingModule { }
