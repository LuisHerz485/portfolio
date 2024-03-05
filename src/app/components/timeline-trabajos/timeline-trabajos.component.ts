import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { experiencia } from '@/app/shared/data/experiencia.data';
import { MatDialog } from '@angular/material/dialog';
import { ExperienciaModalComponent } from '@/app/shared/components/modals/experiencia-modal/experiencia-modal.component';
import * as enumKeys from '@/app/shared/enums';
import { TranslatePipe } from '@/app/shared/pipes';
import { NightModeService } from '@/app/shared/services/night-mode.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IExperiencia } from '@/app/shared/interfaces';

@Component({
    selector: 'app-timeline-trabajos',
    standalone: true,
    imports: [FontAwesomeModule, TranslatePipe, AsyncPipe, CommonModule],
    templateUrl: './timeline-trabajos.component.html',
    styleUrl: './timeline-trabajos.component.scss',
})
export class TimelineTrabajosComponent {
    public maletinIcon = faBriefcase;
    public experiencias = experiencia;

    public enumKeys: typeof enumKeys = enumKeys;

    private dlgRef = inject(MatDialog);
    private nightModeService = inject(NightModeService);

    public nightMode = this.nightModeService.nightMode$;

    public openModalExperiencia(experiencia: IExperiencia): void {
        this.dlgRef.open(ExperienciaModalComponent, {
            disableClose: true,
            panelClass: [
                'max-h-[120vw]',
                'sm:max-h-[40vw]',
                'md:max-h-[80vw]',
                'lg:max-h-[50vw]',
                'xl:max-h-[50vw]',
            ],
            data: experiencia,
        });
    }
}
