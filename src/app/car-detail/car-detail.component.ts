import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { Car } from '../model/car-model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  @Input()
  car!: Array<Car>;
  selectedCar!: any;
  carId!: number;
  insuranceView: boolean = false;
  count: any = 0;

  @Output() countFromcarDetail = new EventEmitter();
  constructor(
    private dataService: DataService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carId = this.sharedService.carID;

    console.log('car id', this.carId);
    this.getCar(this.carId);
  }

  getCar(id: number) {
    this.selectedCar = this.dataService.cars.find((car) => car.id === id);
    console.log('selected car:', this.selectedCar);
  }
  viewInsurance() {
    this.insuranceView = true;
  }
  counter() {
    this.count++;
    this.dataService.sendCount(this.count++);
    console.log(this.count);
  }
}
