import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-saude',
  templateUrl: './dialogo-saude.component.html',
  styleUrl: './dialogo-saude.component.scss'
})
export class DialogoSaudeComponent {
  constructor(public dialogRef: MatDialogRef<DialogoSaudeComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
