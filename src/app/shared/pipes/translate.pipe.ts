import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';
import * as translationsEs from '../../../assets/languages/es.json';
import * as translationsEn from '../../../assets/languages/en.json';

@Pipe({
    name: 'translate',
    pure: false,
    standalone: true,
})
export class TranslatePipe implements PipeTransform {
    private translations: {
        [lang: string]: { [key: string]: string | string[] };
    } = {};
    private currentLanguage: string = 'es';

    constructor(private languageService: LanguageService) {
        this.translations = {
            es: translationsEs,
            en: translationsEn,
        };

        this.languageService.currentLanguage$.subscribe((lang: string) => {
            this.currentLanguage = lang;
        });
    }

    transform(value: string, lang?: string): string | string[] | undefined {
        const currentLanguage = lang || this.currentLanguage;

        const translation = this.getTranslation(value, currentLanguage);

        if (translation === undefined) {
            return value;
        }

        return translation;
    }

    private getTranslation(
        key: string,
        lang: string
    ): string | string[] | undefined {
        return this.translations[lang]?.[key];
    }
}
