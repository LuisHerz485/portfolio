import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoModalComponent } from './credito-modal.component';

describe('CreditoModalComponent', () => {
    let component: CreditoModalComponent;
    let fixture: ComponentFixture<CreditoModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CreditoModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CreditoModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
