import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from './model/car-model';
import { Insurance } from './model/insurance-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cars: Array<Car>;
  insurance: Array<Insurance>;
  private count = new Subject<number>();
  private searchTearm = new Subject<number | string>();
  constructor() {
    /////////////////////////////////////////cars////////////////////////
    this.cars = new Array<Car>();

    // CAR1
    const car1 = new Car();
    car1.id = 1;
    car1.name = 'Maruthi';
    car1.model = 1234;
    car1.image = '../../../../assets/image/car4.jpg';
    car1.yearOfManufacutred = 2000;
    car1.type = 'fuel';
    // CAR1
    const car3 = new Car();
    car3.id = 3;
    car3.name = 'Audi';
    car3.model = 1267;
    car3.image = '../../../../assets/image/car5.jpg';
    car3.yearOfManufacutred = 2022;
    car3.type = 'fuel';
    // CAR2
    const car2 = new Car();
    car2.id = 2;
    car2.name = 'Honda';
    car2.model = 12356;
    car2.image = '../../../../assets/image/car6.jpg';
    car2.yearOfManufacutred = 2001;
    car2.type = 'electric';
    this.cars.push(car1);
    this.cars.push(car2);
    this.cars.push(car3);

    /////////////////////////////////////////insurance////////////////////////
    this.insurance = new Array<Insurance>();
    // ins1
    const ins1 = new Insurance();
    ins1.id = 1;
    ins1.name = 'Tata';
    ins1.premium = 'Rs100/month';
    ins1.discount = '10%';
    // ins2
    const ins2 = new Insurance();
    ins2.id = 2;
    ins2.name = 'Policy Bazar';
    ins2.premium = 'Rs200/month';
    ins2.discount = '12%';
    // ins3
    const ins3 = new Insurance();
    ins3.id = 3;
    ins3.name = 'Bajaj Allianz General';
    ins3.premium = 'Rs300/month';
    ins3.discount = '14%';
    // ins4
    const ins4 = new Insurance();
    ins4.id = 4;
    ins4.name = 'HDFC ERGO Car Insurance';
    ins4.premium = 'Rs400/month';
    ins4.discount = '15%';

    this.insurance.push(ins1);
    this.insurance.push(ins2);
    this.insurance.push(ins3);
    this.insurance.push(ins4);

    // wish list counter
  }
  sendCount(wishCount: number) {
    this.count.next(wishCount);
  }
  receiveCount(): Observable<number> {
    return this.count.asObservable();
  }

  //serach car

  sendSearchtearm(search: number | string) {
    this.searchTearm.next(search);
  }
  receiveSearchTearm(): Observable<number | string> {
    return this.searchTearm.asObservable();
  }
}
