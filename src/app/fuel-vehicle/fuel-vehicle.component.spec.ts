import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelVehicleComponent } from './fuel-vehicle.component';

describe('FuelVehicleComponent', () => {
  let component: FuelVehicleComponent;
  let fixture: ComponentFixture<FuelVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
