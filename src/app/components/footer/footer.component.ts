import { Component } from '@angular/core';
import * as sharedConstants from '@/app/shared/constants';
@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    public sharedConstants: typeof sharedConstants = sharedConstants;
}
