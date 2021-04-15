import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import { ControllStyles } from '../shared/services/controll-styles.service';

@Component({
  selector: 'assistiva-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  // Tooltip texts
  public tootipPosition: TooltipPosition = 'above';
  public contrastText: string = 'Contraste';
  public increaseText: string = 'Aumentar fonte';
  public decreaseText: string = 'Diminuir fonte';
  public TITLE: string = 'PUC Assistiva';
  public IMAGEPATH = '../assets/logo/logo_puc_black_nobg.png';
  public SCREENREADER = 'https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn/related?hl=en-US';

  // Actions control
  public contrastClicked: Boolean = false;
  
  constructor(public ctrl: ControllStyles) {}

  ngOnInit(): void {
  }

  /**
   * This function change font size in all application when the user clicked and choices if they want increase or decrease font letter
   * @param choiced 
   */
  public changeFontSize(choiced:string):void{
    if(choiced==='increase' && this.ctrl.getFontSize() <= 30) {
      this.ctrl.setFontSize(this.ctrl.getFontSize()+2);
    } else if (choiced==='decrease' && this.ctrl.getFontSize() >= 10) {
      this.ctrl.setFontSize(this.ctrl.getFontSize()-2);
    } else {
      this.ctrl.getFontSize();
    }
  }

  public changeContrast():void{
    var contraste  = {
      'backgroundColor':this.contrastClicked?'white':'black',
      'color':this.contrastClicked?'black':'white'
    };
    this.contrastClicked = !this.contrastClicked;
    this.ctrl.setContraste(contraste);
  }

}