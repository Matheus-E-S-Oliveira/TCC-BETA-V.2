import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficoTelaPequenaService {

  constructor() { }

  formatData(avaliacao: any[], currentMonthIndex: number): any {
    const totalMonths = avaliacao.length;
    let startIndex = Math.max(totalMonths - 1 - currentMonthIndex, 0);
    const lastSixMonths = avaliacao.slice(startIndex, startIndex + 1);

    const categorias = avaliacao[currentMonthIndex]?.categorias;

    const datasets = this.createDatasets(categorias, lastSixMonths);
    const currentLabels = lastSixMonths.map(mes => mes.mes);

    return {
      labels: currentLabels,
      datasets: datasets
    };
  }

  private createDatasets(categorias: any[], lastSixMonths: any[]): any[] {
    const datasets = [];
    for (const categoria of categorias) {
      const dataset = {
        label: categoria.nome,
        data: lastSixMonths.map(mes => {
          return mes.categorias.find((cat: { nome: string; }) => cat.nome === categoria.nome)?.data || 0;
        }),
        backgroundColor: categoria.backgroundColor,
      };
      datasets.push(dataset);
    }

    const mediaGeralDataset = {
      label: 'Média Geral',
      data: lastSixMonths.map(mes => {
        const media = mes.categorias.reduce((acc: number, cat: any) => acc + cat.data, 0) / mes.categorias.length;
        return media;
      }),
      borderColor: "rgba(255, 0, 0, 0.8)",
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      type: 'line',
      pointBackgroundColor: "rgba(150, 150, 150, 0.2)",
      pointBorderColor: "rgba(150, 150, 150, 0.5)",
    };
    datasets.push(mediaGeralDataset);

    return datasets;
  }
  formatOptions(){
    const options = {
      maintainAspectRatio: false,
      responsive: true,
      aspectRatio: 1.3,
      plugins: {
        title: {
          display: true,
          text: 'Avaliação media dos serviços prestados',
          font: {
            size: 15,
            weight: 'bold',
            family: 'Arial',
          },
          color: 'rgba(130, 130, 130, 0.9)',
          padding: {
            top: 5,
            bottom: 10,
          },
          align: 'center',
          position: 'top',
        },
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            font: {
              family: 'Arial',
              size: 13,
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
        },
      }
    };
    return options
  }
}
