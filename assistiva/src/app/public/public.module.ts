import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicComponent } from "./public.component";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { PublicRoutingModule } from "./public-routing.module";
import { HomePageComponent } from "./home-page/home-page.component";
import { ModalTipoDeficienciaComponent } from "./home-page/modal-tipo-deficiencia/modal-tipo-deficiencia.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    HomePageComponent,
    PublicComponent,
    ModalTipoDeficienciaComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    DropdownModule,
    FormsModule,

    // angular material
    MatSlideToggleModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class PublicModule {}
