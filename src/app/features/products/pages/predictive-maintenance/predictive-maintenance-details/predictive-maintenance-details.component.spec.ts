import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveMaintenanceDetailsComponent } from './predictive-maintenance-details.component';

describe('PredictiveMaintenanceDetailsComponent', () => {
  let component: PredictiveMaintenanceDetailsComponent;
  let fixture: ComponentFixture<PredictiveMaintenanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PredictiveMaintenanceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictiveMaintenanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
