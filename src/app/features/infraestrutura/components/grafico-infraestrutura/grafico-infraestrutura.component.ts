import { Component } from '@angular/core';
import { GraficoTelaGrandeService } from '../../../../shared/services/grafico-tela-grande/grafico-tela-grande.service';

@Component({
  selector: 'app-grafico-infraestrutura',
  templateUrl: './grafico-infraestrutura.component.html',
  styleUrl: './grafico-infraestrutura.component.scss'
})
export class GraficoInfraestruturaComponent {
  data: any;
  options: any;
  avaliacao = [
    {
      mes: 'Janeiro',
      categorias: [
        { nome: 'Infraestrutura', data: 4.5, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Fevereiro',
      categorias: [
        { nome: 'Infraestrutura', data: 3.7, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Março',
      categorias: [
        { nome: 'Infraestrutura', data: 4.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Abril',
      categorias: [
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Maio',
      categorias: [
        { nome: 'Infraestrutura', data: 2.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Junho',
      categorias: [
        { nome: 'Infraestrutura', data: 4.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Julho',
      categorias: [
        { nome: 'Infraestrutura', data: 2.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Agosto',
      categorias: [
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Setembro',
      categorias: [
        { nome: 'Infraestrutura', data: 3.3, backgroundColor: "rgba(255, 165, 0, 0.5)" },
      ]
    },
    {
      mes: 'Outubro',
      categorias: [
        { nome: 'Infraestrutura', data: 2.9, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    }]
  currentMonthIndex: number = 0;
  contMonth: number = 4
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
