import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasaAprenderComponent } from './casa-aprender.component';

const routes: Routes = [
  {
    path: '',
    component: CasaAprenderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasaAprenderRoutingModule { }
