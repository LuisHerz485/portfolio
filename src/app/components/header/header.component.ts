import { Component, inject } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavigationService } from '../../shared/services/navigation.service';
import { TapToTopService } from '../../shared/services/tap-to-top.service';
import { opciones } from '../../shared/data';
import { IOpciones } from '../../shared/interfaces';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [FontAwesomeModule],
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

    get idioma(): string {
        return this.isSpanish ? 'ES' : 'EN';
    }

    get chooseMode(): IconProp {
        return this.isDarkMode ? faMoon : faSun;
    }

    public escogerIdioma(): void {
        this.isSpanish = !this.isSpanish;
    }

    public escogerModo(): void {
        this.isDarkMode = !this.isDarkMode;
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
}
