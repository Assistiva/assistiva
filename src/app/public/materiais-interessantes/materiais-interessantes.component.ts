import { aba2Data } from './../../shared/mocks/aba2';
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
    public esconde:boolean = false;
    public SORRY = '../assets/images/sorry.jpeg';

    constructor(public ctrl: ControllStyles) {
        this.getLeisData();
        // this.originalData = leisData.data;
        // this.totalRecords = this.originalData.length;
        // this.dados = this.originalData.slice(0,10);
    }

    ngOnInit(): void {
    }

    // sera o service para obter dados de leis
    getLeisData() {
        this.esconde = false;
        this.originalData = leisData.data;
        this.totalRecords = this.originalData.length;
        this.dados = this.originalData.slice(0,10);
    }

    getInclusaoEscolarData(){
        this.esconde = false;
        this.originalData = aba2Data.data;
        this.totalRecords = this.originalData.length;
        this.dados = this.originalData.slice(0,10);
    }

    classeLixoVazioApagar() {
        this.totalRecords = 0;
        this.dados = [];
        this.esconde = true;
    }

    public selectedTab(tab:any): void{
        
        if(tab === 1) {
            this.nameTab= 'LEIS, DOCUMENTOS SOBRE INCLUSÃO';
            this.getLeisData();
        } else if (tab === 2) {
            this.nameTab= 'SOBRE INCLUSÃO ESCOLAR';
            this.getInclusaoEscolarData();
        } else if(tab === 3) {
            this.nameTab= 'COMUNICAÇÃO ALTERNATIVA';
            this.classeLixoVazioApagar();
        } else if(tab === 4) {
            this.nameTab= 'ATENDIMENTO EDUCACIONAL ESPECIALIZADO';
            this.classeLixoVazioApagar();
        } else {
            this.nameTab= 'TECNOLOGIA ASSISTIVA APLICADA A EDUCAÇÃO INCLUSIVA';
            this.classeLixoVazioApagar();
        }

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
