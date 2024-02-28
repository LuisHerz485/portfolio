import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { proyectos } from '../../shared/data';
import { CommonModule } from '@angular/common';
import { ProyectoModalComponent } from '../../shared/components/modals/proyecto-modal/proyecto-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { IProyecto } from '../../shared/interfaces';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-proyectos',
    standalone: true,
    imports: [CommonModule, ProyectoModalComponent, NgOptimizedImage],
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProyectosComponent {
    public openModal: boolean = false;
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
    constructor(private dialogRef: MatDialog) {
        console.log(this.dataProyectos);
    }

    public openModalProyecto(proyecto: IProyecto) {
        this.dialogRef.open(ProyectoModalComponent, {
            disableClose: true,
            minWidth: '80vw',
            minHeight: '40vw',
            maxWidth: '80vw',
            maxHeight: '130vw',
            data: proyecto,
        });
    }
}
