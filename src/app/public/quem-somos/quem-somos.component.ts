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
  public pesquisadores = [];
  
  constructor(public ctrl: ControllStyles) { 
    this.idealizadores = QuemSomosData.idealizadores;
    this.pesquisadores = QuemSomosData.grupoTA;
  }

  ngOnInit(): void {
  }

  public navigateToLattes(lattes: string) {
    console.log("Nome: ", lattes);
    window.open(lattes, '_blank');
  }

}
