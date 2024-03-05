import { Component, inject } from '@angular/core';
import { estudios } from '@/app/shared/data';
import { TranslatePipe } from '@/app/shared/pipes';
import * as enumKeys from '@/app/shared/enums';
import { LanguageService } from '@/app/shared/services/language.service';
import { NightModeService } from '@/app/shared/services/night-mode.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
    selector: 'app-educacion',
    standalone: true,
    imports: [TranslatePipe, AsyncPipe, CommonModule],
    providers: [TranslatePipe],
    templateUrl: './educacion.component.html',
    styleUrl: './educacion.component.scss',
})
export class EducacionComponent {
    public estudios = estudios;
    public enumKeys: typeof enumKeys = enumKeys;
    public arraySkills: string[] | undefined | string;

    private translatePipeService = inject(TranslatePipe);
    private lenguajeService = inject(LanguageService);
    private nightModeService = inject(NightModeService);

    public nightMode$ = this.nightModeService.nightMode$;

    constructor() {
        this.lenguajeService.currentLanguage$.subscribe(() => {
            this.recorrerTraduccion();
        });
    }

    private recorrerTraduccion(): void {
        this.estudios.forEach(element => {
            this.translateArrays(element.skills[0]);
        });
    }

    private translateArrays(translateArray: string): void {
        this.arraySkills = this.translatePipeService.transform(translateArray);
    }
}
