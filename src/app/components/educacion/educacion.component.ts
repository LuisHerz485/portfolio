import { Component, OnInit, inject } from '@angular/core';
import { estudios } from '../../shared/data';
import { TranslatePipe } from '../../shared/pipes';
import * as enumKeys from '../../shared/enums';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-educacion',
    standalone: true,
    imports: [TranslatePipe],
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
