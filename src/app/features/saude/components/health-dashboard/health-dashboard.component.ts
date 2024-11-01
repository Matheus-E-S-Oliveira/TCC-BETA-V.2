import { Component } from '@angular/core';

@Component({
  selector: 'app-health-dashboard',
  templateUrl: './health-dashboard.component.html',
  styleUrl: './health-dashboard.component.scss'
})
export class HealthDashboardComponent {

  totalVotes = 1000; 
  currentMonthIndex: number = 0;

  ratings = [
    { category: 'Criterio 1#', average: 2.0 },
    { category: 'Criterio 2#', average: 2.0 },
    { category: 'Criterio 3#', average: 2.0 },
    { category: 'criterio 4#', average: 2.0 },
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
