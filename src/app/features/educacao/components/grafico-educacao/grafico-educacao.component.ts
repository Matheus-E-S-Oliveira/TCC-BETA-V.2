import { Component } from '@angular/core';
import { GraficoTelaGrandeService } from '../../../../shared/services/grafico-tela-grande/grafico-tela-grande.service';

@Component({
  selector: 'app-grafico-educacao',
  templateUrl: './grafico-educacao.component.html',
  styleUrl: './grafico-educacao.component.scss'
})
export class GraficoEducacaoComponent {
  data: any;
  options: any;
  avaliacao = [
    {
      mes: 'Janeiro',
      categorias: [
        { nome: 'Educação', data: 3.8, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Fevereiro',
      categorias: [
        { nome: 'Educação', data: 4.2, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Março',
      categorias: [
        { nome: 'Educação', data: 3.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Abril',
      categorias: [
        { nome: 'Educação', data: 2.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Maio',
      categorias: [
        { nome: 'Educação', data: 0.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Junho',
      categorias: [
        { nome: 'Educação', data: 4.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Julho',
      categorias: [
        { nome: 'Educação', data: 4.0, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Agosto',
      categorias: [
        { nome: 'Educação', data: 2.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Setembro',
      categorias: [
        { nome: 'Educação', data: 3.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Outubro',
      categorias: [
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    },
    {
      mes: 'Novembro',
      categorias: [
        { nome: 'Educação', data: 4.0, backgroundColor: "rgba(0, 255, 0, 0.5)" },
      ]
    }]
  currentMonthIndex: number = 0;
  screenWidth: number = 1000;
  cdRef: any;

  constructor(private graficoTelaGrandeService: GraficoTelaGrandeService){}
  
  ngOnInit() {
    this.updateChartData();
  }
  updateChartData() {
    let tamanhoTela = window.innerWidth
    this.data = this.graficoTelaGrandeService.formatData(this.avaliacao, this.currentMonthIndex)
  
    this.options = this.graficoTelaGrandeService.formatOptions();
  }
  nextMonth() {
    if (this.currentMonthIndex > 0) {
      this.currentMonthIndex--;
      this.updateChartData();
    }
  }

  prevMonth() {
    const totalMonths = this.avaliacao.length;
    let quantidadeMonth = this.graficoTelaGrandeService.tamanhoTela();
    if (this.currentMonthIndex < totalMonths - quantidadeMonth) {
      this.currentMonthIndex++;
      this.updateChartData();
    }
  }
}
