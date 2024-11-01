import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  starOptions = [
    { rating: 1, stars: ['star', 'star_border', 'star_border', 'star_border', 'star_border'] },
    { rating: 2, stars: ['star', 'star', 'star_border', 'star_border', 'star_border'] },
    { rating: 3, stars: ['star', 'star', 'star', 'star_border', 'star_border'] },
    { rating: 4, stars: ['star', 'star', 'star', 'star', 'star_border'] },
    { rating: 5, stars: ['star', 'star', 'star', 'star', 'star'] }
  ];
}
