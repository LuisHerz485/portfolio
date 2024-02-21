import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-descripcion',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './descripcion.component.html',
    styleUrl: './descripcion.component.scss',
})
export class DescripcionComponent {
    public info: string =
        'Soy Bachiller en Ingeniería de Sistemas Computacionales, con especialización en Mejora Continua, Gestión de Procesos y Calidad. Actualmente, me encuentro cursando la Maestría en Ingeniería de Sistemas con mención en Gerencia de Sistemas de la Información.';
}
