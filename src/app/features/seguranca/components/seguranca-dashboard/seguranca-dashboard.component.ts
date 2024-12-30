import { Component } from '@angular/core';

@Component({
  selector: 'app-seguranca-dashboard',
  templateUrl: './seguranca-dashboard.component.html',
  styleUrl: './seguranca-dashboard.component.scss'
})
export class SegurancaDashboardComponent {

  totalVotes = 1000;
  isBrowser: boolean = false;
  activeItem!: null;
 
  currentMonthIndex: number = 0;



  ratings = [
    { category: 'Criterio 1#', average: 3.0 },
    { category: 'Criterio 2#', average: 3.0 },
    { category: 'Criterio 3#', average: 3.0 },
    { category: 'criterio 4#', average: 3.0 },
    { category: 'criterio 5#', average: 3.0 }
  ];

  generalAverage: number = this.calculateGeneralAverage();

  circumference: number = 2 * Math.PI * 45;
  offset: number = this.circumference - (this.generalAverage / 5) * this.circumference;
  screenWidth!: number;

  calculateGeneralAverage(): number {
    const total = this.ratings.reduce((acc, rating) => acc + rating.average, 0);
    return total / this.ratings.length;
  }

}
