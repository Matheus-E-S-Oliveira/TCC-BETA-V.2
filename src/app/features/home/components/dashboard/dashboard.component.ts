import { ChangeDetectorRef, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  value = 1.4;
  value1 = 0.2;
  value2 = 2.5;
  value3 = 1.0;
  value4 = 2.0;
  totalVotes = 1000;
  isBrowser: boolean = false;
  activeItem!: null;
 
  currentMonthIndex: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private cdRef: ChangeDetectorRef) { }

  ratings = [
    { category: 'Saude', average: 0.2 },
    { category: 'Educação', average: 2.5 },
    { category: 'Infraestrutura', average: 1.0 },
    { category: 'Segurança', average: 2.0 },
  ];

  generalAverage: number = this.calculateGeneralAverage();

  circumference: number = 2 * Math.PI * 45;
  offset: number = this.circumference - (this.value / 5) * this.circumference;
  screenWidth!: number;

  calculateGeneralAverage(): number {
    const total = this.ratings.reduce((acc, rating) => acc + rating.average, 0);
    return total / this.ratings.length;
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
      this.updateChartOptions();      
    }
  }
 
  updateChartOptions() {
    if (this.screenWidth > 730) {
      return true;
    } else {
      return false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.updateChartOptions();
  }
}
