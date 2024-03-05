import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { info } from '@/app/shared/data';
import * as enumKey from '@/app/shared/enums';
import { TranslatePipe } from '@/app/shared/pipes';
import { NightModeService } from '@/app/shared/services/night-mode.service';
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

    public nightModeService = inject(NightModeService);
    public nightMode$ = this.nightModeService.nightMode$;
}
