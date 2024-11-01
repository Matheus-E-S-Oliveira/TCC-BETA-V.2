import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-educacao',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
value = 0;
value1 =  1;
value2 =  2;
value3 = 3;
value4 =  4;
value5 = 5;
melu! :any;
favoriteSeason: string = '';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn', 'wtf'];
starOptions = [
  {
    rating: 1,
    stars: ['star', 'star_border', 'star_border', 'star_border', 'star_border']
  },
  {
    rating: 2,
    stars: ['star', 'star', 'star_border', 'star_border', 'star_border']
  },
  {
    rating: 3,
    stars: ['star', 'star', 'star', 'star_border', 'star_border']
  },
  {
    rating: 4,
    stars: ['star', 'star', 'star', 'star', 'star_border']
  },
  {
    rating: 5,
    stars: ['star', 'star', 'star', 'star', 'star']
  }
];

imprimirEstrelas(){
  this.starOptions.forEach(option => {
    console.log(`Rating: ${option.rating}, Stars: ${option.stars.join(' ')}`);
  });
}
}
