import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { info } from '../../shared/data';
import * as enumKey from '../../shared/enums';
import { TranslatePipe } from '../../shared/pipes';
import { NightModeService } from '../../shared/services/night-mode.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
    selector: 'app-descripcion',
    standalone: true,
    imports: [FontAwesomeModule, TranslatePipe, CommonModule, AsyncPipe],
    templateUrl: './descripcion.component.html',
    styleUrl: './descripcion.component.scss',
})
export class DescripcionComponent {
    public info: string = info;
    public enumKey: typeof enumKey = enumKey;

    private nightModeService = inject(NightModeService);
    public nightMode$ = this.nightModeService.nightMode$;
}
