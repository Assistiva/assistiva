import { aba2Data } from './../../shared/mocks/aba2';
import { leisData } from './../../shared/mocks/leisData';
import { Component, OnInit } from '@angular/core';
import { ControllStyles } from 'src/app/shared/services/controll-styles.service';
import {FormControl} from '@angular/forms';

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
    public SORRY = '../assets/images/sorry.png';
    public primary = 'primary';
    public accent = 'accent';
    public selected = new FormControl(0);
    public campoDeBusca = new FormControl('');

    constructor(public ctrl: ControllStyles) {
        this.getLeisData();
        window.scroll(0,0);
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
            this.classeLixoVazioApagar();
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

    public limparBuscador() {
        try {
            this.campoDeBusca.setValue('');
            this.campoDeBusca.reset();
            if (this.selected && this.selected.value === 0) {
                this.getLeisData();
            } else {
                this.classeLixoVazioApagar();
            }
        } catch (e) {
            this.classeLixoVazioApagar();
        }
    }

    public buscarPor() {
        try {
            if (this.selected && this.selected.value === 0) {
                this.retornoBusca(this.selected.value, this.campoDeBusca.value);
            } else {
                this.classeLixoVazioApagar();
            }
        } catch (e) {
            this.classeLixoVazioApagar();
        }
    }


    // BUSCA LOCAL DE MOMENTO (BACKEND AINDA ESTA EM ANDAMENTO)

    public retornoBusca(index: number, busca: any): any {
        try {
            if (index === 0 && (busca || busca !== '')) {
                let retorno = [];

                // pegar palavras e dar split por espaço
                const palavras = busca.split(' ');

                leisData.data.forEach((f) => {
                    palavras.forEach(el => {
                        if (f.description.toLowerCase().includes(el.toLowerCase())) {
                            retorno.push(f);
                        }
                    });
                });

                if (retorno && retorno.length > 0) {
                    this.esconde = false;
                    this.originalData = retorno;
                    this.totalRecords = this.originalData.length;
                    this.dados = this.originalData.slice(0,10);
                    return true;
                }
                return this.classeLixoVazioApagar();
            } else {
                return this.classeLixoVazioApagar();
            }
        
        } catch (e) {
            if (index === 0) {
                return this.getLeisData();
            }
            return this.classeLixoVazioApagar();
        }
    }
}
