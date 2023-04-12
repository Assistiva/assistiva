import { Component, OnInit } from '@angular/core';
import { ControllStyles } from 'src/app/shared/services/controll-styles.service';

@Component({
  selector: 'trabalhos-ta',
  templateUrl: './trabalhos-ta.component.html',
  styleUrls: ['./trabalhos-ta.component.scss']
})
export class TrabalhosTaComponent implements OnInit {
  
  public SORRY = '../assets/images/siteEmConstrucao.jpeg';
  public link1 = "https://drive.google.com/drive/folders/1_ToFEQCUB1lR_ncv9Odoxy2schx7b85f?usp=sharing";
  public link2 = "https://drive.google.com/drive/folders/1JLU7G02-hyYLZs7VIhenVSZ2e0xB36py?usp=sharing";
  public link3 = "https://drive.google.com/file/d/1QkysLrgheIFhmQ_P72u_dcxPIkeNwm5c/view?usp=sharing";
  public link4 = "https://drive.google.com/drive/folders/1YvjZQ-0tTr14ptY0C4ZQ1SDvDAncNegt?usp=sharing";
  public link5 = "https://drive.google.com/drive/folders/18y7NHAaDha8OM1YfY1CQT-9yQoIlYOPN?usp=sharing";
  public link6 = "https://drive.google.com/file/d/1mcb1sM6YNI8Mq5LnPae0JFqH44X3U9ua/view?usp=sharing";
  public link7 = "https://drive.google.com/drive/folders/1LeLXzk9i-y5zWiaz2SZoPBmi_vZl4ZpT?usp=sharing";
  public link8 = "https://drive.google.com/file/d/1e1eR8CzXwuKG-5Ig-Tmt3yBmFEWmIccv/view?usp=sharing";
  
  constructor(public ctrl: ControllStyles) { }

  ngOnInit(): void {
  }

  public colorLink(){
    try {
      const clink = this.ctrl.getContrast();
      if(clink.color === 'black') {
        return {'color':'mediumblue'};
      }
      return {'color':'yellow'};
    }catch (e){
      return {'color':'mediumblue'};
    }
  }
  
}
