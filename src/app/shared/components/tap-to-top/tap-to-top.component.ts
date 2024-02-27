import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-tap-to-top',
    standalone: true,
    imports: [],
    templateUrl: './tap-to-top.component.html',
})
export class TapToTopComponent {
    public showButton: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.showButton = window.scrollY > 600;
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
