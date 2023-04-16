import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "modal-tipo-deficiencia",
  templateUrl: "./modal-tipo-deficiencia.component.html",
  styleUrls: ["./modal-tipo-deficiencia.component.scss"],
})
export class ModalTipoDeficienciaComponent implements OnInit {
  public tipoDeficienciaList: any[];
  public tipoDeficiencia;

  constructor(public dialogRef: MatDialogRef<ModalTipoDeficienciaComponent>) {}

  ngOnInit(): void {
    this.tipoDeficienciaList = [
      { name: "Visual", code: "Visual" },
      { name: "Motora", code: "Motora" },
      { name: "Mental", code: "Mental" },
      { name: "Auditiva", code: "Auditiva" },
      { name: "Paralisia Cerebral", code: "Paralisia Cerebral" },
    ];
  }
}
