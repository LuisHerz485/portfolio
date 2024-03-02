import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { experiencia } from '../../../data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IExperiencia } from '../../../interfaces';
import * as enumKeys from '../../../enums';
import { TranslatePipe } from '../../../pipes';
import { LanguageService } from '../../../services/language.service';

@Component({
    selector: 'app-experiencia-modal',
    standalone: true,
    imports: [FontAwesomeModule, TranslatePipe],
    providers: [TranslatePipe],

    templateUrl: './experiencia-modal.component.html',
    styleUrl: './experiencia-modal.component.scss',
})
export class ExperienciaModalComponent {
    public enumKeys: typeof enumKeys = enumKeys;

    public closeIcon = faClose;

    public experiencia = experiencia;
    public arrayTareas: string[] | string | undefined;

    private dialogRef = inject(DialogRef);
    private translatePipeService = inject(TranslatePipe);

    constructor(@Inject(MAT_DIALOG_DATA) public infoExperiencia: IExperiencia) {
        this.translateArrays(infoExperiencia.tareas[0]);
    }

    public closeModal() {
        this.dialogRef.close(false);
    }

    public translateArrays(translateArray: string): void {
        this.arrayTareas = this.translatePipeService.transform(translateArray);
    }
}
