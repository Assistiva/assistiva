import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MateriaisInteressantesComponent } from './materiais-interessantes.component';
import { MateriaisInteressantesRoutingModule } from './materiais-interessantes-routing.module';
import {PaginatorModule} from 'primeng/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MateriaisInteressantesComponent],
  imports: [
    CommonModule,
    MateriaisInteressantesRoutingModule,
    MatButtonModule,
    MatGridListModule,
    PaginatorModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MateriaisInteressantesModule { }
