import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { info } from '../../shared/data';

@Component({
    selector: 'app-descripcion',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './descripcion.component.html',
    styleUrl: './descripcion.component.scss',
})
export class DescripcionComponent {
    public info: string = info;
}
