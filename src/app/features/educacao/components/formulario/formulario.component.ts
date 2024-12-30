import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoEducacaoComponent } from '../dialogo-educacao/dialogo-educacao.component';
import { formularioEducacaoModel } from './formulario.viewmodel';
import { EducacaoResponse } from '../../../../core/api/endpoints/educacao/educacao.response';

@Component({
  selector: 'app-formulario-educacao',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  value1 = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
  value5 = 0;

  public formulario!: formularioEducacaoModel; 

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogoEducacaoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para enviar o formulário
        console.log("Formulário enviado!");
        console.log('submit chegou')
      } else {
        console.log("Envio cancelado.");
      }
    });
  }
  seasons: string[] = ['opação 1', 'opação 2', 'opção 3', 'opção 4', 'opção 5'];

}
