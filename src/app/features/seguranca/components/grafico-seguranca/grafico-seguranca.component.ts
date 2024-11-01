import { Component } from '@angular/core';
import { GraficoTelaGrandeService } from '../../../../shared/services/grafico-tela-grande/grafico-tela-grande.service';

@Component({
  selector: 'app-grafico-seguranca',
  templateUrl: './grafico-seguranca.component.html',
  styleUrl: './grafico-seguranca.component.scss'
})
export class GraficoSegurancaComponent {
  data: any;
  options: any;
  height: any;
  avaliacao = [
    {
      mes: 'Janeiro',
      categorias: [
        { nome: 'Segurança', data: 4.2, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Fevereiro',
      categorias: [
        { nome: 'Segurança', data: 4.0, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Março',
      categorias: [
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Abril',
      categorias: [
        { nome: 'Segurança', data: 2.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Maio',
      categorias: [
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Junho',
      categorias: [
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Julho',
      categorias: [
        { nome: 'Segurança', data: 3.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Agosto',
      categorias: [
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Setembro',
      categorias: [
        { nome: 'Segurança', data: 4.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Outubro',
      categorias: [
        { nome: 'Segurança', data: 3.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
      ]
    },
    {
      mes: 'Novembro',
      categorias: [
        { nome: 'Segurança', data: 3.0, backgroundColor: "rgba(0, 0, 255, 0.5)" },
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
