import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Car } from '../model/car-model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-electric-vehicle',
  templateUrl: './electric-vehicle.component.html',
  styleUrls: ['./electric-vehicle.component.css'],
})
export class ElectricVehicleComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private sharedService: SharedService
  ) {}
  cars!: Array<Car>;
  electricCar: Array<Car> = [];
  @Input()
  car!: Array<Car>;
  selectedCar!: any;
  ngOnInit(): void {
    this.cars = this.dataService.cars;
    this.cars.forEach((car: Car) => {
      if (car.type === 'electric') {
        this.electricCar.push(car);
      }
    });
    console.log(this.electricCar);
  }
  viewCar(id: number) {
    this.sharedService.carID = id;
    console.log(this.sharedService.carID);
    this.router.navigate(['/viewCar']);
  }
}
