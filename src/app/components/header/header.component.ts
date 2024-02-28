import { Component } from '@angular/core';
import { opcionesHeader } from '../../interfaces';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavigationService } from '../../shared/services/navigation.service';
import { TapToTopService } from '../../shared/services/tap-to-top.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    public normalMode = faMoon;
    public openMenu: boolean = false;
    public darkMode = faSun;
    public isDarkMode: boolean = false;
    public isSpanish: boolean = true;
    public opciones: opcionesHeader[] = [
        {
            titulo: 'Inicio',
            ref: 'inicio',
        },
        {
            titulo: 'Acerca de Mi',
            ref: 'acercademi',
        },
        {
            titulo: 'Proyectos',
            ref: 'proyectos',
        },
        {
            titulo: 'Conocimientos',
            ref: 'conocimientos',
        },
        {
            titulo: 'Educacion',
            ref: 'educacion',
        },
    ];

    constructor(
        private menuService: NavigationService,
        public Tap2TopService: TapToTopService
    ) {}

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
        this.Tap2TopService.scrollToDiv(elementId);
        this.closeModal();
    }
}
