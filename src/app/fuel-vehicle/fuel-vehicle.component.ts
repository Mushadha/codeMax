import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Car } from '../model/car-model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-fuel-vehicle',
  templateUrl: './fuel-vehicle.component.html',
  styleUrls: ['./fuel-vehicle.component.css'],
})
export class FuelVehicleComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private sharedService: SharedService
  ) {}
  cars!: Array<Car>;
  fuelCar: Array<Car> = [];
  ngOnInit(): void {
    this.cars = this.dataService.cars;

    console.log(this.cars);

    this.cars.forEach((car: Car) => {
      if (car.type === 'fuel') {
        this.fuelCar.push(car);
      }
      console.log(this.fuelCar);
    });
  }

  viewCar(id: number) {
    // this.selectedCar = this.car.find((car) => car.id === id);
    this.sharedService.carID = id;
    console.log(this.sharedService.carID);
    this.router.navigate(['/viewCar']);
  }
}
