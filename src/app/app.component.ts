import { Component } from '@angular/core';
import { ControllStyles } from './shared/services/controll-styles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'assistiva';

  constructor(public ctrl: ControllStyles){}

}
