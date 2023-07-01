import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'assistiva-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() font = 12;
  public LOGOPATH = '../assets/logo/logoPedagogiaNoBG.png';
  public LOGOPUC = '../assets/logo/logo_puc_black_nobg.png';
  public face = 'https://www.facebook.com/Pedagogia-PUC-Minas-1473527689588147/';
  public insta = 'https://www.instagram.com/pedagogiapucminas/?hl=pt-br';
  public youtube = 'https://www.youtube.com/channel/UC9GQ74UopaKdQ-lKaz_1kqQ';
  public portal = 'http://www.pucminas.br/unidade/coracao-eucaristico/ensino/graduacao/Paginas/Pedagogia-Licenciatura.aspx?tipo=152f25a5-fa8d-4d04-a7ba-57b6b4c21265&campi=ab2';

  constructor() { }

  ngOnInit(): void {
  }

}
