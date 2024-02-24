import { Component } from '@angular/core';
import { estudios } from '../../shared/data';

@Component({
    selector: 'app-educacion',
    standalone: true,
    imports: [],
    templateUrl: './educacion.component.html',
    styleUrl: './educacion.component.scss',
})
export class EducacionComponent {
    public estudios = estudios;
}
