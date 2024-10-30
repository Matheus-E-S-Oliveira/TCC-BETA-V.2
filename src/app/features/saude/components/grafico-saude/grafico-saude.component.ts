import { Component } from '@angular/core';
import { GraficoTelaGrandeService } from '../../../../shared/services/grafico-tela-grande/grafico-tela-grande.service';

@Component({
  selector: 'app-grafico-saude',
  templateUrl: './grafico-saude.component.html',
  styleUrl: './grafico-saude.component.scss'
})
export class GraficoSaudeComponent {
  data: any;
  options: any;
  avaliacao = [
    {
      mes: 'Janeiro',
      categorias: [
        { nome: 'Saude', data: 4.0, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    },
    {
      mes: 'Fevereiro',
      categorias: [
        { nome: 'Saude', data: 3.5, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    },
    {
      mes: 'Março',
      categorias: [
        { nome: 'Saude', data: 4.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    },
    {
      mes: 'Abril',
      categorias: [
        { nome: 'Saude', data: 3.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    },
    {
      mes: 'Maio',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    },
    {
      mes: 'Junho',
      categorias: [
        { nome: 'Saude', data: 4.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    },
    {
      mes: 'Julho',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    },
    {
      mes: 'Agosto',
      categorias: [
        { nome: 'Saude', data: 4.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    },
    {
      mes: 'Setembro',
      categorias: [
        { nome: 'Saude', data: 3.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    },
    {
      mes: 'Outubro',
      categorias: [
        { nome: 'Saude', data: 2.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
      ]
    }]
  currentMonthIndex: number = 0;
  contMonth: number = 4;
  screenWidth: number = 1000;
  cdRef: any;

  constructor(private graficoTelaGrandeService: GraficoTelaGrandeService){}
  
  ngOnInit() {
    this.updateChartData();
  }
  updateChartData() {
    let tamanhoTela = window.innerWidth;

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
