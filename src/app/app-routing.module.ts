import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { ElectricVehicleComponent } from './electric-vehicle/electric-vehicle.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { FuelVehicleComponent } from './fuel-vehicle/fuel-vehicle.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';

const routes: Routes = [
  {
    path: '',
    component: ImageCarouselComponent,
  },
  {
    path: 'fuel',
    component: FuelVehicleComponent,
  },
  {
    path: 'electric',
    component: ElectricVehicleComponent,
  },
  {
    path: 'viewCar',
    component: CarDetailComponent,
  },
  {
    path: 'form',
    component: FormDetailsComponent,
  },
  {
    path: 'car',
    component: CarListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
