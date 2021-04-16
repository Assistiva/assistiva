import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriaisInteressantesComponent } from './materiais-interessantes.component';



const routes: Routes = [
    {
      path:'',
      component: MateriaisInteressantesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaisInteressantesRoutingModule { }