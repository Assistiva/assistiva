import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PublicRoutingModule } from './public-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    HomePageComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,

    // angular material
    MatSlideToggleModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class PublicModule { }
