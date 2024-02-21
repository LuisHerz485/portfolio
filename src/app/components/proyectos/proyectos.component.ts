import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { proyectos } from '../../../shared/data';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';

@Component({
    selector: 'app-proyectos',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProyectosComponent {
    public dataProyectos = proyectos;

    constructor() {}
}
