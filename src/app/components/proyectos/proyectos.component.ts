import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { proyectos } from '../../shared/data';
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
    public breakpoints = {
        280: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },
        390: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1700: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    };
    constructor() {}
}
