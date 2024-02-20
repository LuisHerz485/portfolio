import { Component } from '@angular/core';
import { opcionesHeader } from '../../interfaces';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
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

    get idioma(): string {
        return this.isSpanish ? 'ES' : 'EN';
    }

    public escogerIdioma(): void {
        this.isSpanish = !this.isSpanish;
    }
}
