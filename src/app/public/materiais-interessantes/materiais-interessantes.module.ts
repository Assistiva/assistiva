import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MateriaisInteressantesComponent } from './materiais-interessantes.component';
import { MateriaisInteressantesRoutingModule } from './materiais-interessantes-routing.module';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [MateriaisInteressantesComponent],
  imports: [
    CommonModule,
    MateriaisInteressantesRoutingModule,
    MatButtonModule,
    MatGridListModule,
    PaginatorModule
  ]
})
export class MateriaisInteressantesModule { }
