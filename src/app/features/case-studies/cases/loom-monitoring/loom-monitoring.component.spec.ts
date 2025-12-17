import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoomMonitoringComponent } from './loom-monitoring.component';

describe('LoomMonitoringComponent', () => {
  let component: LoomMonitoringComponent;
  let fixture: ComponentFixture<LoomMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoomMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoomMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
