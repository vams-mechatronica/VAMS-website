import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeMonitoringDetailsComponent } from './real-time-monitoring-details.component';

describe('RealTimeMonitoringDetailsComponent', () => {
  let component: RealTimeMonitoringDetailsComponent;
  let fixture: ComponentFixture<RealTimeMonitoringDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealTimeMonitoringDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeMonitoringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
