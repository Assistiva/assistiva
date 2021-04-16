import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ControllStyles {

    contraste: any = {'backgroundColor':'white', 'color':'black'};
    fontSize: number = 12;

    constructor(){}

    public getContrast(){
        return this.contraste;
    }

    public getFontSize(){
        return this.fontSize;
    }

    public setContraste(contraste: any){
        this.contraste = contraste;
    }

    public setFontSize(font: number){
        this.fontSize = font;
    }

}
