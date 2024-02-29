import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { experiencia } from '../../../data';

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

    public closeModal() {
        this.dialogRef.close(false);
    }
}
