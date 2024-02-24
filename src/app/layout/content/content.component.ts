import { Component, OnInit } from '@angular/core';
import { QuienSoyComponent } from '../../components/quien-soy/quien-soy.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DescripcionComponent } from '../../components/descripcion/descripcion.component';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';
import { TimelineTrabajosComponent } from '../../components/timeline-trabajos/timeline-trabajos.component';
import { EducacionComponent } from '../../components/educacion/educacion.component';
import { ConocimientosComponent } from '../../components/conocimientos/conocimientos.component';
import { NavigationService } from '../../shared/services/navigation.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        QuienSoyComponent,
        DescripcionComponent,
        ProyectosComponent,
        HeaderComponent,
        FooterComponent,
        TimelineTrabajosComponent,
        EducacionComponent,
        ConocimientosComponent,
        AsyncPipe,
    ],
    providers: [],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
})
export class ContentComponent {
    constructor(private menuService: NavigationService) {}

    openMenu$ = this.menuService.myBoolean$;
}
