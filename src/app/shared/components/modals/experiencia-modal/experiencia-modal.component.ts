import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { experiencia } from '../../../data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IExperiencia } from '../../../interfaces';

@Component({
    selector: 'app-experiencia-modal',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './experiencia-modal.component.html',
    styleUrl: './experiencia-modal.component.scss',
})
export class ExperienciaModalComponent {
    public closeIcon = faClose;

    public experiencia = experiencia;

    private dialogRef = inject(DialogRef);

    constructor(
        @Inject(MAT_DIALOG_DATA) public infoExperiencia: IExperiencia
    ) {}

    public closeModal() {
        this.dialogRef.close(false);
    }
}
