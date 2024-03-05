import {
    CUSTOM_ELEMENTS_SCHEMA,
    Component,
    Inject,
    inject,
} from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProyecto } from '@/app/shared/interfaces';
import { TranslatePipe } from '@/app/shared/pipes';
import * as enumKeys from '@/app/shared/enums';
import { NightModeService } from '@/app/shared/services/night-mode.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
    selector: 'app-proyecto-modal',
    standalone: true,
    imports: [FontAwesomeModule, TranslatePipe, AsyncPipe, CommonModule],
    templateUrl: './proyecto-modal.component.html',
    styleUrl: './proyecto-modal.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProyectoModalComponent {
    public closeIcon = faClose;
    public enumKeys: typeof enumKeys = enumKeys;

    private nightModeService = inject(NightModeService);

    public nightMode$ = this.nightModeService.nightMode$;

    constructor(@Inject(MAT_DIALOG_DATA) public data: IProyecto) {}

    private dlgRef = inject(DialogRef);

    public closeModal(): void {
        this.dlgRef.close(false);
    }
}
