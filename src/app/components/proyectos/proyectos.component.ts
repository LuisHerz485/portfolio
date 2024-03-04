import {
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    HostListener,
    inject,
    NgZone,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { proyectos } from '../../shared/data';
import { CommonModule } from '@angular/common';
import { ProyectoModalComponent } from '../../shared/components/modals/proyecto-modal/proyecto-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { IProyecto } from '../../shared/interfaces';
import { NgOptimizedImage } from '@angular/common';
import * as enumKeys from '../../shared/enums';
import { TranslatePipe } from '../../shared/pipes';

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
    private elementRef = inject(ElementRef);
    private ngZone = inject(NgZone);

    private intersectionObserver!: IntersectionObserver;

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
            minWidth: '80vw',
            minHeight: '40vw',
            maxWidth: '80vw',
            maxHeight: '130vw',
            data: proyecto,
        });
    }
}
