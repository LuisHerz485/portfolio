import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { experiencia } from '../../shared/data/experiencia.data';
import { MatDialog } from '@angular/material/dialog';
import { ExperienciaModalComponent } from '../../shared/components/modals/experiencia-modal/experiencia-modal.component';
import * as enumKeys from '../../shared/enums';
import { TranslatePipe } from '../../shared/pipes';
import { panelClassResponsiveModal } from '../../shared/constants';
import { NightModeService } from '../../shared/services/night-mode.service';
import { AsyncPipe, CommonModule } from '@angular/common';

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

    public openModalExperiencia(experiencia: any): void {
        this.dlgRef.open(ExperienciaModalComponent, {
            disableClose: true,
            panelClass: [...panelClassResponsiveModal],
            data: experiencia,
        });
    }
}
