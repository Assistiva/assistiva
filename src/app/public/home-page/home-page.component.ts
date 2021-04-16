import { Component, OnInit, Input } from '@angular/core';
import { ControllStyles } from 'src/app/shared/services/controll-styles.service';

@Component({
  selector: 'assistiva-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public image1 = '../assets/images/homepage_tecnologiaassistiva.png';
  public image2 = '../assets/images/homepage_TAnaEducacao.png';

  constructor(public ctrl: ControllStyles) { }

  ngOnInit(): void {
  }

}
