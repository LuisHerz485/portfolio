import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NightModeService {
    private nightModeSubject = new BehaviorSubject<boolean>(false);
    nightMode$ = this.nightModeSubject.asObservable();

    public nightMode(value: boolean) {
        this.nightModeSubject.next(value);
    }
}
