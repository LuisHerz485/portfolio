import { Component } from '@angular/core';
import { QuienSoyComponent } from '../../components/quien-soy/quien-soy.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DescripcionComponent } from '../../components/descripcion/descripcion.component';

@Component({
    selector: 'app-content',
    standalone: true,
    imports: [
        QuienSoyComponent,
        DescripcionComponent,
        HeaderComponent,
        FooterComponent,
    ],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
})
export class ContentComponent {}
