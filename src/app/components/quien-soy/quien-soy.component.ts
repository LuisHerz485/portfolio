import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '../../shared/pipes';
import * as enumsKey from '../../shared/enums/';

@Component({
    selector: 'app-quien-soy',
    standalone: true,
    imports: [FontAwesomeModule, TranslatePipe],
    templateUrl: './quien-soy.component.html',
    styleUrl: './quien-soy.component.scss',
})
export class QuienSoyComponent {
    public arrowRigth = faArrowRight;
    public filePdf = faFilePdf;
    public enumsKey: typeof enumsKey = enumsKey;
}
