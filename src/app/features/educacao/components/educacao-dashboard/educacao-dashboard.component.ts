import { Component } from '@angular/core';

@Component({
  selector: 'app-educacao-dashboard',
  templateUrl: './educacao-dashboard.component.html',
  styleUrl: './educacao-dashboard.component.scss'
})
export class EducacaoDashboardComponent {
  
  totalVotes = 1000;
  isBrowser: boolean = false;
  activeItem!: null;
 
  currentMonthIndex: number = 0;
  
  ratings = [
    { category: 'Criterio 1#', average: 4.0 },
    { category: 'Criterio 2#', average: 4.0 },
    { category: 'Criterio 3#', average: 4.0 },
    { category: 'criterio 4#', average: 4.0 },
    { category: 'criterio 5#', average: 4.0 }
  ];

  generalAverage: number = this.calculateGeneralAverage();

  circumference: number = 2 * Math.PI * 45;
  offset: number = this.circumference - (this.generalAverage / 5) * this.circumference;

  calculateGeneralAverage(): number {
    const total = this.ratings.reduce((acc, rating) => acc + rating.average, 0);
    return total / this.ratings.length;
  }
}
