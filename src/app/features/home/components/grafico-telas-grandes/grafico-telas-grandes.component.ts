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
        { nome: 'Educação', data: 4.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 4.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Julho',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Agosto',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Setembro',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    },
    {
      mes: 'Outubro',
      categorias: [
        { nome: 'Saude', data: 1.1, backgroundColor: "rgba(138, 43, 226, 0.5)" },
        { nome: 'Segurança', data: 1.4, backgroundColor: "rgba(0, 0, 255, 0.5)" },
        { nome: 'Educação', data: 1.9, backgroundColor: "rgba(0, 255, 0, 0.5)" },
        { nome: 'Infraestrutura', data: 1.3, backgroundColor: "rgba(255, 165, 0, 0.5)" }
      ]
    }]
  currentMonthIndex: number = 0;
  screenWidth: number = 1000;
  cdRef: any;

  updateChartData() {


    const totalMonths = this.avaliacao.length;
    let startIndex = Math.max(totalMonths - 6 - this.currentMonthIndex, 0);
    const lastSixMonths = this.avaliacao.slice(startIndex, startIndex + 6);

    const labels = this.avaliacao.map(mes => mes.mes);

    const datasets = [];

    const categorias = this.avaliacao[this.currentMonthIndex]?.categorias;

    for (const categoria of categorias) {
      const dataset = {
        label: categoria.nome,
        data: lastSixMonths.map(mes => {
          return mes.categorias.find(cat => cat.nome === categoria.nome)?.data || 0;
        }),
        backgroundColor: categoria.backgroundColor,

      };
      datasets.push(dataset);
    }
    const mediaGeralDataset = {
      label: 'Média Geral',
      data: lastSixMonths.map(mes => {
        const media = mes.categorias.reduce((acc, categoria) => acc + categoria.data, 0) / mes.categorias.length;
        return media;
      }),
      borderColor: "rgba(255, 0, 0, 0.8)",
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      type: 'line',
      pointBackgroundColor: "rgba(150, 150, 150, 0,2)",
      pointBorderColor: "rgba(150, 150, 150, 0.5)",
    };
    datasets.push(mediaGeralDataset);

    const currentLabels = lastSixMonths.map(mes => mes.mes);

    this.data = {
      labels: currentLabels,
      datasets: datasets
    };
  
    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      aspectRatio: 1.3,
      plugins: {
        title: {
          display: true,
          text: 'Avaliação media dos serviços prestados',
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial',
          },
          color: 'rgba(130, 130, 130, 1)',
          padding: {
            top: 5,
            bottom: 10,
          },
          align: 'center',
          position: 'top',
        },
        legend: {
          position: 'bottom',
          align: 'center',
          labels: {
            font: {
              family: 'Arial',
              size: 11,
              weight: 'bold',
            },
            color: 'rgba(130, 130, 130, 0.9)'
          }
        }
      },
      scales: {
        x: {
          type: 'category',
          ticks: {
            color: "rgba(130, 130, 130, 0.9)",
          },
          grid: {
            color: "rgba(211, 211, 211, 0.5)"
          }
        },
        y: {
          beginAtZero: true,
          max: 5,
          stepSize: 0.5,
          ticks: {
            color: "rgba(130, 130, 130, 0.9)"
          },
          grid: {
            color: "rgba(211, 211, 211, 0.5)"
          }
        }
      }
    };
  }
  nextMonth() {
    if (this.currentMonthIndex > 0) {
      this.currentMonthIndex--;
      this.updateChartData();
    }
  }

  prevMonth() {
    const totalMonths = this.avaliacao.length;
    if (this.currentMonthIndex < totalMonths - 6) {
      this.currentMonthIndex++;
      this.updateChartData();
    }
  }
}
