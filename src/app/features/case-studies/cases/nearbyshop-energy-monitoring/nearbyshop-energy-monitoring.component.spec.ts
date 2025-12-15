import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyshopEnergyMonitoringComponent } from './nearbyshop-energy-monitoring.component';

describe('NearbyshopEnergyMonitoringComponent', () => {
  let component: NearbyshopEnergyMonitoringComponent;
  let fixture: ComponentFixture<NearbyshopEnergyMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NearbyshopEnergyMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearbyshopEnergyMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
