import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '@/app/shared/pipes';
import * as enumsKey from '@/app/shared/enums/';
import { NightModeService } from '@/app/shared/services/night-mode.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
    selector: 'app-quien-soy',
    standalone: true,
    imports: [FontAwesomeModule, TranslatePipe, AsyncPipe, CommonModule],
    templateUrl: './quien-soy.component.html',
    styleUrl: './quien-soy.component.scss',
})
export class QuienSoyComponent {
    public arrowRigth = faArrowRight;
    public filePdf = faFilePdf;
    public enumsKey: typeof enumsKey = enumsKey;

    public nightModeService = inject(NightModeService);
    public nightMode$ = this.nightModeService.nightMode$;
}
