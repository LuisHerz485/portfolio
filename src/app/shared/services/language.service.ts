import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    private currentLanguageSubject = new BehaviorSubject<string>('es');
    currentLanguage$ = this.currentLanguageSubject.asObservable();

    setLanguage(language: string) {
        this.currentLanguageSubject.next(language);
    }
}
