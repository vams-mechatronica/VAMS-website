import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McfPredictiveMaintenanceComponent } from './mcf-predictive-maintenance.component';

describe('McfPredictiveMaintenanceComponent', () => {
  let component: McfPredictiveMaintenanceComponent;
  let fixture: ComponentFixture<McfPredictiveMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McfPredictiveMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McfPredictiveMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
