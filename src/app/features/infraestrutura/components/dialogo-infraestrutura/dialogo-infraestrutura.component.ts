import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-infraestrutura',
  templateUrl: './dialogo-infraestrutura.component.html',
  styleUrl: './dialogo-infraestrutura.component.scss'
})
export class DialogoInfraestruturaComponent {
  constructor(public dialogRef: MatDialogRef<DialogoInfraestruturaComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
