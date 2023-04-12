import { Component, OnInit } from '@angular/core';
import { ControllStyles } from 'src/app/shared/services/controll-styles.service';

@Component({
  selector: 'laboratorio-ta',
  templateUrl: './laboratorio-ta.component.html',
  styleUrls: ['./laboratorio-ta.component.scss']
})
export class LaboratorioTaComponent implements OnInit {

  public SORRY = '../assets/images/tacapa.jpeg';
  public TA1 = '../assets/images/ta1.jpeg';
  public TA2 = '../assets/images/ta2.jpeg';
  public TA4 = '../assets/images/ta4.jpeg';
  public TA5 = '../assets/images/ta5.jpeg';
  constructor(public ctrl: ControllStyles) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

}
