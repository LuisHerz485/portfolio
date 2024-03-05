import { Component, inject } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavigationService } from '@/app/shared/services/navigation.service';
import { TapToTopService } from '@/app/shared/services/tap-to-top.service';
import { opciones } from '@/app/shared/data';
import { IOpciones } from '@/app/shared/interfaces';
import { LanguageService } from '@/app/shared/services/language.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslatePipe } from '@/app/shared/pipes';
import { NightModeService } from '@/app/shared/services/night-mode.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [FontAwesomeModule, AsyncPipe, TranslatePipe, CommonModule],

    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    public normalMode = faMoon;
    public darkMode = faSun;

    public openMenu: boolean = false;
    public isDarkMode: boolean = false;
    public isSpanish: boolean = true;

    public opciones: IOpciones[] = opciones;

    private menuService = inject(NavigationService);
    public tap2TopService = inject(TapToTopService);
    private languagueService = inject(LanguageService);
    private nightModeService = inject(NightModeService);

    get idioma(): string {
        return this.isSpanish ? 'es' : 'en';
    }

    get chooseMode(): IconProp {
        return this.isDarkMode ? faMoon : faSun;
    }

    public escogerIdioma(): void {
        this.isSpanish = !this.isSpanish;
        this.languagueService.setLanguage(this.idioma);
    }

    public escogerModo(): void {
        this.isDarkMode = !this.isDarkMode;
        this.nightModeService.nightMode(this.isDarkMode);
    }

    public toggleMenu(): void {
        this.openMenu = !this.openMenu;
        this.menuService.updateBoolean(true);
    }

    public closeModal() {
        this.openMenu = !this.openMenu;
        this.menuService.updateBoolean(false);
    }

    public scrollAndClose(elementId: string): void {
        this.tap2TopService.scrollToDiv(elementId);
        this.closeModal();
    }

    public goToHome() {
        this.tap2TopService.scrollToDiv('inicio');
    }
}
