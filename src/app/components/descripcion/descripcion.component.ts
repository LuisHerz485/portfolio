import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { info } from '../../shared/data';
import * as enumKey from '../../shared/enums';
import { TranslatePipe } from '../../shared/pipes';

@Component({
    selector: 'app-descripcion',
    standalone: true,
    imports: [FontAwesomeModule, TranslatePipe],
    templateUrl: './descripcion.component.html',
    styleUrl: './descripcion.component.scss',
})
export class DescripcionComponent {
    public info: string = info;
    public enumKey: typeof enumKey = enumKey;
}
