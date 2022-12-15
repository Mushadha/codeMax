import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FuelVehicleComponent } from './fuel-vehicle/fuel-vehicle.component';
import { ElectricVehicleComponent } from './electric-vehicle/electric-vehicle.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FuelVehicleComponent,
    ElectricVehicleComponent,
    ImageCarouselComponent,
    CarDetailComponent,
    InsuranceListComponent,
    FormDetailsComponent,
    CarListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
