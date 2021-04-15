import { leisData } from './../../shared/mocks/leisData';
import { Component, OnInit } from '@angular/core';
import { ControllStyles } from 'src/app/shared/services/controll-styles.service';

@Component({
    selector: 'app-materiais-interessantes',
    templateUrl: './materiais-interessantes.component.html',
    styleUrls: ['./materiais-interessantes.component.scss']
})
export class MateriaisInteressantesComponent implements OnInit {

    public dados: any = [];
    public originalData:any;
    public totalRecords = 0;
    public nameTab: string = "LEIS, DOCUMENTOS SOBRE INCLUSÃO";

    constructor(public ctrl: ControllStyles) {
        this.originalData = leisData.data;
        this.totalRecords = this.originalData.length;
        this.dados = this.originalData.slice(0,10);
    }

    ngOnInit(): void {
    }

    public selectedTab(tab:any): void{
        // this.nameTab= 'Nome da tab selecionada';
    }

    public paginate(event) {
        const itens = event.page*event.rows + 10;
        const pag = event.page*event.rows;
        this.dados = this.originalData.slice(pag,itens);
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
