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
import { IProyecto } from '../../../interfaces';
import { TranslatePipe } from '../../../pipes';
import * as enumKeys from '../../../enums';

@Component({
    selector: 'app-proyecto-modal',
    standalone: true,
    imports: [FontAwesomeModule, TranslatePipe],
    templateUrl: './proyecto-modal.component.html',
    styleUrl: './proyecto-modal.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProyectoModalComponent {
    public closeIcon = faClose;
    public enumKeys: typeof enumKeys = enumKeys;
    constructor(@Inject(MAT_DIALOG_DATA) public data: IProyecto) {}

    private dlgRef = inject(DialogRef);

    public closeModal(): void {
        this.dlgRef.close(false);
    }
}
