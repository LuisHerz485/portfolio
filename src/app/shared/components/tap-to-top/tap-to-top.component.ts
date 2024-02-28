import { Component, HostListener } from '@angular/core';
import { TapToTopService } from '../../services/tap-to-top.service';

@Component({
    selector: 'app-tap-to-top',
    standalone: true,
    imports: [],
    templateUrl: './tap-to-top.component.html',
})
export class TapToTopComponent {
    public showButton: boolean = false;

    constructor(public tap2TopService: TapToTopService) {}

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.showButton = window.scrollY > 600;
    }
}
