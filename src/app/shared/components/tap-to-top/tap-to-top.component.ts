import { Component, HostListener, inject } from '@angular/core';
import { TapToTopService } from '@/app/shared/services/tap-to-top.service';
import { NavigationService } from '../../services/navigation.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
    selector: 'app-tap-to-top',
    standalone: true,
    imports: [AsyncPipe, CommonModule],
    templateUrl: './tap-to-top.component.html',
})
export class TapToTopComponent {
    public showButton: boolean = false;

    public tap2TopService = inject(TapToTopService);
    private navigateService = inject(NavigationService);
    public openMenu$ = this.navigateService.myBoolean$;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.showButton = window.scrollY > 600;
    }
}
