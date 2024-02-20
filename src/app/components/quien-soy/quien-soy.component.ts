import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-quien-soy',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './quien-soy.component.html',
    styleUrl: './quien-soy.component.scss',
})
export class QuienSoyComponent {
    public arrowRigth = faArrowRight;
    public filePdf = faFilePdf;
}
