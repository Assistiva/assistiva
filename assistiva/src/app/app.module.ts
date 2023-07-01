import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: 
    [
      AppComponent,
      HeaderComponent,
      FooterComponent
    ],
    imports:
    [
      RouterModule,
      BrowserModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
      AppRoutingModule,
      MatTooltipModule,
      MatToolbarModule,
      MatSlideToggleModule,
      BrowserAnimationsModule,
      SidebarModule,
      DropdownModule,
      FormsModule,
      CheckboxModule,
      ColorPickerModule,
      DialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
