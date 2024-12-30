import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-formulario-seguranca',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  value1 =  0;
  value2 =  0;
  value3 =  0;
  value4 =  0;
  value5 =  0;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para enviar o formulário
        console.log("Formulário enviado!");
      } else {
        console.log("Envio cancelado.");
      }
    });
  }
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
