import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.scss'
})
export class DialogoComponent {
  constructor(public dialogRef: MatDialogRef<DialogoComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
