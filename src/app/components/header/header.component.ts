import { Component } from '@angular/core';
import { opcionesHeader } from '../../interfaces';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavigationService } from '../../shared/services/navigation.service';

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
            ref: '#inicio',
        },
        {
            titulo: 'Quien soy',
            ref: '#quiensoy',
        },
        {
            titulo: 'Proyectos',
            ref: '#proyectos',
        },
        {
            titulo: 'Skills',
            ref: '#skills',
        },
        {
            titulo: 'Contactame',
            ref: '#contacto',
        },
    ];

    constructor(private menuService: NavigationService) {}

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

    closeModal() {
        this.openMenu = !this.openMenu;
        this.menuService.updateBoolean(false);
    }
}
