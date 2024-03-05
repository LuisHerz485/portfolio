import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { proyectos } from '@/app/shared/data';
import { CommonModule } from '@angular/common';
import { ProyectoModalComponent } from '@/app/shared/components/modals/proyecto-modal/proyecto-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { IProyecto } from '@/app/shared/interfaces';
import { NgOptimizedImage } from '@angular/common';
import * as enumKeys from '@/app/shared/enums';
import { TranslatePipe } from '@/app/shared/pipes';
import { panelClassResponsiveModal } from '@/app/shared/constants';

@Component({
    selector: 'app-proyectos',
    standalone: true,
    imports: [
        CommonModule,
        ProyectoModalComponent,
        NgOptimizedImage,
        TranslatePipe,
    ],
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProyectosComponent {
    public enumKeys: typeof enumKeys = enumKeys;
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

    private dialogRef = inject(MatDialog);

    public openModalProyecto(proyecto: IProyecto) {
        this.dialogRef.open(ProyectoModalComponent, {
            disableClose: true,
            panelClass: [...panelClassResponsiveModal],
            data: proyecto,
        });
    }
}
