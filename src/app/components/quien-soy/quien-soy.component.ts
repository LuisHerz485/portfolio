import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '@/app/shared/pipes';
import * as enumsKey from '@/app/shared/enums/';
import { NightModeService } from '@/app/shared/services/night-mode.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TapToTopService } from '@/app/shared/services/tap-to-top.service';

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

    private tap2TopService = inject(TapToTopService);

    public goToProyectos(): void {
        this.tap2TopService.scrollToDiv('proyectos');
    }
}
