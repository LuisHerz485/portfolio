import { Component, HostListener, inject } from '@angular/core';
import { TapToTopService } from '../../services/tap-to-top.service';

@Component({
    selector: 'app-tap-to-top',
    standalone: true,
    imports: [],
    templateUrl: './tap-to-top.component.html',
})
export class TapToTopComponent {
    public showButton: boolean = false;

    public tap2TopService = inject(TapToTopService);

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.showButton = window.scrollY > 600;
    }
}
