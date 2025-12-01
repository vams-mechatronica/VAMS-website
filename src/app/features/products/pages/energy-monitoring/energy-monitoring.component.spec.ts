import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyMonitoringComponent } from './energy-monitoring.component';

describe('EnergyMonitoringComponent', () => {
  let component: EnergyMonitoringComponent;
  let fixture: ComponentFixture<EnergyMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergyMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
