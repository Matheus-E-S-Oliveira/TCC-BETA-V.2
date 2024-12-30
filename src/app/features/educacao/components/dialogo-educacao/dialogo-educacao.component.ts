import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-educacao',
  templateUrl: './dialogo-educacao.component.html',
  styleUrl: './dialogo-educacao.component.scss'
})
export class DialogoEducacaoComponent {
  constructor(public dialogRef: MatDialogRef<DialogoEducacaoComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    console.log('enviou o submit');
    
  }
}
