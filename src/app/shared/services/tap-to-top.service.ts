import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TapToTopService {
    constructor() {}

    public scrollToDiv(elementId: string): void {
        console.log('TapTotoP');
        const element = document.getElementById(elementId);
        const offset = 200;

        if (element) {
            const targetPosition =
                element.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    }
}
