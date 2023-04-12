import { Component, OnInit } from '@angular/core';
import { QuemSomosData } from './../../shared/mocks/quemSomosData';
import { ControllStyles } from 'src/app/shared/services/controll-styles.service';

@Component({
  selector: 'app-quem-smos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent implements OnInit {

  public quemSomosImg = '../assets/images/quemsomos.png';
  public idealizadores = [];
  public pesquisadores1 = [];
  public pesquisadores2 = [];
  public pesquisadores3 = [];
  
  constructor(public ctrl: ControllStyles) { 
    this.idealizadores = QuemSomosData.idealizadores;
    this.preencherPesquisadores(QuemSomosData.grupoTA);
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

  public preencherPesquisadores(quemSomos) {
    try {
      this.pesquisadores1 = quemSomos.filter((e, i) => i <= 3);
      this.pesquisadores2 = quemSomos.filter((e, i) => (i > 3 && i <=7));
      this.pesquisadores3 = quemSomos.filter((e, i) => (i > 7 && i <=10));
    } catch (e) {
      this.pesquisadores1 = QuemSomosData.grupoTA;
      this.pesquisadores2 = [];
      this.pesquisadores3 = [];
    }
  }


  public navigateToLattes(lattes: string) {
    console.log("Nome: ", lattes);
    window.open(lattes, '_blank');
  }

}
