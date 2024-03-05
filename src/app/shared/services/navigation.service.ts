import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private myBooleanSubject = new BehaviorSubject<boolean>(false);
    myBoolean$ = this.myBooleanSubject.asObservable();

    updateBoolean(value: boolean) {
        this.myBooleanSubject.next(value);
    }
}
