import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineVisionPackingComponent } from './machine-vision-packing.component';

describe('MachineVisionPackingComponent', () => {
  let component: MachineVisionPackingComponent;
  let fixture: ComponentFixture<MachineVisionPackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachineVisionPackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineVisionPackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
