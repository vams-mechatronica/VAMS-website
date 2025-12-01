import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRfidTrackingComponent } from './material-rfid-tracking.component';

describe('MaterialRfidTrackingComponent', () => {
  let component: MaterialRfidTrackingComponent;
  let fixture: ComponentFixture<MaterialRfidTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialRfidTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialRfidTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
