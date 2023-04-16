import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalTipoDeficienciaComponent } from "src/app/public/home-page/modal-tipo-deficiencia/modal-tipo-deficiencia.component";
import { ControllStyles } from "src/app/shared/services/controll-styles.service";

@Component({
  selector: "assistiva-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  public static modalMostrado = false;
  public image1 = "../assets/images/homepage_tecnologiaassistiva.png";
  public image2 = "../assets/images/homepage_TAnaEducacao.png";
  public maos = "../assets/images/maosnobg.png";
  public proposta1 = "../assets/images/proposta1.png";

  constructor(public ctrl: ControllStyles, public dialog: MatDialog) {
    window.scroll(0, 0);
  }

  ngOnInit(): void {
    if (!HomePageComponent.modalMostrado) {
      this.openDialog();
      HomePageComponent.modalMostrado = true;
    }
  }

  scrollToElement(el: HTMLElement): void {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalTipoDeficienciaComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
