import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    // children:[
    //   {
    //     path: '', redirectTo: 'public', pathMatch: 'full',
    //   },
    //   {
    //     path: 'trabalhos-ta-puc',
    //     loadChildren: () => import('./trabalhos-ta-puc/trabalhos-ta-puc.module').then(m => m.TrabalhosTaPucModule)
    //   }
    // ]
  },
    {
        path: 'quem-somos',
        loadChildren: () => import('./quem-somos/quem-somos.module').then(m => m.QuemSomosModule)
    },
    {
        path: 'materiais-interessantes',
        loadChildren: () => import('./materiais-interessantes/materiais-interessantes.module').then(m => m.MateriaisInteressantesModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
