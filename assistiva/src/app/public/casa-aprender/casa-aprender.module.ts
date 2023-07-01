import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CasaAprenderComponent } from './casa-aprender.component';
import { CasaAprenderRoutingModule } from './casa-aprender-routing.module';

@NgModule({
  declarations: [
    CasaAprenderComponent
  ],
  imports: [
    CommonModule,
    CasaAprenderRoutingModule,

    // angular material
    MatSlideToggleModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class CasaAprenderModule { }
