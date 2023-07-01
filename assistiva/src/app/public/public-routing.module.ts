import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
  },
  {
    path: 'quem-somos',
    loadChildren: () => import('./quem-somos/quem-somos.module').then(m => m.QuemSomosModule)
  },
  {
    path: 'materiais-interessantes',
    loadChildren: () => import('./materiais-interessantes/materiais-interessantes.module').then(m => m.MateriaisInteressantesModule)
  },
  {
    path: 'casa-aprender',
    loadChildren: () => import('./casa-aprender/casa-aprender.module').then(m => m.CasaAprenderModule)
  },
  {
    path: 'laboratorio-ta',
    loadChildren: () => import('./laboratorio-ta/laboratorio-ta.module').then(m => m.LaboratorioTaModule)
  },
  {
    path: 'trabalhos-ta',
    loadChildren: () => import('./trabalhos-ta/trabalhos-ta.module').then(m => m.TrabalhosTaModule)
  },
  {
    path: 'fale-conosco',
    loadChildren: () => import('./fale-conosco/fale-conosco.module').then(m => m.FaleConoscoModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  // {
  //   path: 'private',
  //   loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
  //   canActivate: [PrivateGuard],
  //   canActivateChild: [PrivateGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
