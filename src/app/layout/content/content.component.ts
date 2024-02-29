import { Component, HostListener, OnInit, inject } from '@angular/core';
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
import { TapToTopComponent } from '../../shared/components/tap-to-top/tap-to-top.component';

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
        TapToTopComponent,
    ],
    providers: [],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
})
export class ContentComponent {
    private menuService = inject(NavigationService);

    openMenu$ = this.menuService.myBoolean$;

    @HostListener('document:contextmenu', ['$event'])
    clickout(event: Event): void {
        event.preventDefault();
    }

    @HostListener('document:copy', ['$event'])
    onCopy(event: ClipboardEvent): void {
        event.preventDefault();
    }
}
