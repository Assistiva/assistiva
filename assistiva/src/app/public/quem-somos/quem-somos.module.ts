import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { QuemSomosComponent } from './quem-somos.component';
import { QuemSomosRoutingModule } from './quem-somos-routing.module';


@NgModule({
  declarations: [QuemSomosComponent],
  imports: [
    CommonModule,
    QuemSomosRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class QuemSomosModule { }
