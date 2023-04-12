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
  public maos = '../assets/images/maosnobg.png';
  public proposta1 = '../assets/images/proposta1.png';

  constructor(public ctrl: ControllStyles) {
    window.scroll(0,0);
  }

  ngOnInit(): void {
  }

  scrollToElement(el: HTMLElement): void {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
