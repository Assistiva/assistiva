import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TooltipPosition } from "@angular/material/tooltip";
import { ControllStyles } from "../shared/services/controll-styles.service";

@Component({
  selector: "assistiva-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  // Imagens
  public VICON = "../assets/images/vicon.png";
  public TECLA0 = "../assets/images/tecla0.png";
  public TECLA1 = "../assets/images/tecla1.png";
  public TECLA2 = "../assets/images/tecla2.png";
  public TECLA3 = "../assets/images/tecla3.png";

  // Tooltip texts
  public tootipPosition: TooltipPosition = "above";
  public contrastText: string = "Contraste";
  public increaseText: string = "Aumentar fonte";
  public decreaseText: string = "Diminuir fonte";
  public TITLE: string = "PUC Assistiva";
  public IMAGEPATH = "../assets/logo/logo_puc_black_nobg.png";
  public SCREENREADER =
    "https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn/related?hl=en-US";
  public VLIBRAS = "https://www.nvaccess.org/download/";
  public visibleSidebar3;
  public tipoFonteList: any[];
  public tamanhoFonteList: any[];
  public espacamentoFonteList: any[];

  public tipoFonte;
  public tamanhoFonte;
  public espacamentoFonte;
  public color: string;
  public color2: string;
  public textAlign: string = "justify";
  // Actions control
  public contrastClicked: Boolean = false;
  public showImages: Boolean = true;
  displayModal: boolean = false;

  constructor(public ctrl: ControllStyles) {}

  ngOnInit(): void {
    this.tipoFonteList = [
      { name: "Arial", code: "Arial" },
      { name: "Roboto", code: "Roboto" },
      { name: "Helvetica", code: "Helvetica" },
      { name: "Tahoma", code: "Tahoma" },
      { name: "Verdana", code: "Verdana" },
      { name: "Times New Roman", code: "Times New Roman" },
      { name: "Georgia", code: "Georgia" },
      { name: "Courier New", code: "Courier New" },
      { name: "Monaco", code: "Monaco" },
    ];
    this.tamanhoFonteList = [
      { name: "8px", code: 8 },
      { name: "9px", code: 9 },
      { name: "10px", code: 10 },
      { name: "11px", code: 11 },
      { name: "12px", code: 12 },
      { name: "14px", code: 14 },
      { name: "16px", code: 16 },
      { name: "18px", code: 18 },
      { name: "20px", code: 20 },
      { name: "24px", code: 24 },
      { name: "28px", code: 28 },
      { name: "36px", code: 36 },
      { name: "48px", code: 48 },
    ];
    this.espacamentoFonteList = [
      { name: "Simples", code: "normal" },
      { name: "1,15", code: 1.15 },
      { name: "1,5", code: 1.5 },
      { name: "Duplo", code: 2 },
    ];
  }

  /**
   * This function change font size in all application when the user clicked and choices if they want increase or decrease font letter
   * @param choiced
   */
  public changeFontSize(choiced: string): void {
    if (choiced === "increase" && this.ctrl.getFontSize() <= 48) {
      this.ctrl.setFontSize(this.ctrl.getFontSize() + 2);
    } else if (choiced === "decrease" && this.ctrl.getFontSize() >= 8) {
      this.ctrl.setFontSize(this.ctrl.getFontSize() - 2);
    } else {
      this.ctrl.getFontSize();
    }
  }

  public changeContrast(): void {
    var contraste = {
      backgroundColor: this.contrastClicked ? "white" : "black",
      color: this.contrastClicked ? "black" : "white",
    };
    this.contrastClicked = !this.contrastClicked;
    this.ctrl.setContraste(contraste);
  }

  // Configurações gerais

  public changeFontByConfig(): void {
    try {
      if (this.tamanhoFonte) {
        this.ctrl.setFontSize(this.tamanhoFonte.code);
      }
    } catch {
      this.ctrl.setFontSize(16);
    }
  }

  public changeTextAlignment(type: string): void {
    this.textAlign = type;
  }

  public ocultarImagens(): void {
    this.ctrl.setImagesVisibility({
      visibility: this.showImages ? "visible" : "hidden",
    });
  }

  public changeConfiguration() {
    try {
      var contraste = {
        backgroundColor: this.color2 || "white",
        color: this.color || "black",
        "text-align": this.textAlign || "justify",
        "font-family": this.tipoFonte ? this.tipoFonte.code : "Arial",
        "line-height": this.espacamentoFonte || "normal",
      };
      this.ctrl.setContraste(contraste);
    } catch {
      this.ctrl.setContraste(contraste);
    }
  }

  public aplicar(): void {
    // if tamanho da fonte
    this.changeFontByConfig();

    this.ocultarImagens();

    // cor de fundo e texto, alinhamento e font
    this.changeConfiguration();
  }

  public limpar(): void {
    this.contrastClicked = false;
    const padrao = {
      backgroundColor: "white",
      color: "black",
      "text-align": "justify",
      "font-family": "Arial",
      "line-height": "normal",
    };
    this.color = undefined;
    this.color2 = undefined;
    this.textAlign = "start";
    this.ctrl.setContraste(padrao);
    this.ctrl.setFontSize(16);
    this.ctrl.setLineHeight("normal");
    this.showImages = true;
    this.ctrl.setImagesVisibility({ visibility: "visible" });
  }

  public showModalDialog(): void {
    this.displayModal = !this.displayModal;
  }
}
