import { Component, OnInit } from '@angular/core';
import { ControllStyles } from 'src/app/shared/services/controll-styles.service';

@Component({
  selector: 'casa-aprender',
  templateUrl: './casa-aprender.component.html',
  styleUrls: ['./casa-aprender.component.scss']
})
export class CasaAprenderComponent implements OnInit {

  public comofunciona = '../assets/images/comofunciona.png';
  public oquee = '../assets/images/oquee.png';
  public oficinainformatica = '../assets/images/oficinainformatica.png';
  public logocasa = '../assets/images/logocasa.png';
  
  constructor(public ctrl: ControllStyles) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

}
