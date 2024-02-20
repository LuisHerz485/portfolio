import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layout/content/content.component').then(
                c => c.ContentComponent
            ),
    },
];
