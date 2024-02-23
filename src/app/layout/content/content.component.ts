import { Component } from '@angular/core';
import { QuienSoyComponent } from '../../components/quien-soy/quien-soy.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DescripcionComponent } from '../../components/descripcion/descripcion.component';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';
import { TimelineTrabajosComponent } from '../../components/timeline-trabajos/timeline-trabajos.component';

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
    ],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
})
export class ContentComponent {}
