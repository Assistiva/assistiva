import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabalhosTaComponent } from './trabalhos-ta.component';

const routes: Routes = [
  {
    path: '',
    component: TrabalhosTaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabalhosTaRoutingModule { }
