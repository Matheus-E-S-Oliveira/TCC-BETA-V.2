import { GraficoTelaGrandeService } from './../../../../shared/services/grafico-tela-grande/grafico-tela-grande.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-telas-grandes',
  templateUrl: './grafico-telas-grandes.component.html',
  styleUrl: './grafico-telas-grandes.component.scss'
})
export class GraficoTelasGrandesComponent {
  data: any;
  options: any;
  avaliacao = [
    {
      mes: 'Janeiro',
      categorias: [
        { nome: 'Saude', data: 4.0, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.2, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 3.8, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 4.5, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Fevereiro',
      categorias: [
        { nome: 'Saude', data: 3.5, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.0, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 4.2, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 3.7, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Março',
      categorias: [
        { nome: 'Saude', data: 4.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 3.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 4.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Abril',
      categorias: [
        { nome: 'Saude', data: 3.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 2.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 2.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Maio',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 0.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 2.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Junho',
      categorias: [
        { nome: 'Saude', data: 4.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 3.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 4.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Julho',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 3.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 4.0, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 2.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Agosto',
      categorias: [
        { nome: 'Saude', data: 4.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 2.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Setembro',
      categorias: [
        { nome: 'Saude', data: 3.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 3.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 3.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Outubro',
      categorias: [
        { nome: 'Saude', data: 2.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 3.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 2.9, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    }]
  currentMonthIndex: number = 0;
  contMonth: number = 6
  screenWidth: number = 1000;
  cdRef: any;

  constructor(private graficoTelaGrandeService: GraficoTelaGrandeService){}
  
  ngOnInit() {
    this.updateChartData();
  }
  updateChartData() {

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
    let quantidadeMonth = this.graficoTelaGrandeService.tamanhoTela()
    if (this.currentMonthIndex < totalMonths - quantidadeMonth) {
      this.currentMonthIndex++;
      this.updateChartData();
    }
  }
}
