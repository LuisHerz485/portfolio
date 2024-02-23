import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTrabajosComponent } from './timeline-trabajos.component';

describe('TimelineTrabajosComponent', () => {
  let component: TimelineTrabajosComponent;
  let fixture: ComponentFixture<TimelineTrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineTrabajosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
