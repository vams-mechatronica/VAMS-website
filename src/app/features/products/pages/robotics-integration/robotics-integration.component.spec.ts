import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticsIntegrationComponent } from './robotics-integration.component';

describe('RoboticsIntegrationComponent', () => {
  let component: RoboticsIntegrationComponent;
  let fixture: ComponentFixture<RoboticsIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoboticsIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboticsIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
