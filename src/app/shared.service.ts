import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  carID!: number;
  insuranceID!: number;
  count: number = 0;
  searchTearm!: number | string;
  constructor() {}
}
