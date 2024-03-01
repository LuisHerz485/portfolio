import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { experiencia } from '../../shared/data/experiencia.data';
import { MatDialog } from '@angular/material/dialog';
import { ExperienciaModalComponent } from '../../shared/components/modals/experiencia-modal/experiencia-modal.component';

@Component({
    selector: 'app-timeline-trabajos',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './timeline-trabajos.component.html',
    styleUrl: './timeline-trabajos.component.scss',
})
export class TimelineTrabajosComponent {
    public maletinIcon = faBriefcase;
    public experiencias = experiencia;

    private dlgRef = inject(MatDialog);

    public openModalExperiencia(experiencia: any): void {
        this.dlgRef.open(ExperienciaModalComponent, {
            disableClose: true,
            panelClass: [
                'max-h-[100vw]',
                'sm:max-h-[20vw]',
                'md:max-h-[80vw]',
                'lg:max-h-[50vw]',
                'xl:max-h-[50vw]',
                'min-w-[80%]',
            ],
            data: experiencia,
        });
    }
}
