import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CountryinfoComponent } from './countryinfo/countryinfo.component';
import { NgxPaginationModule } from 'ngx-pagination';
/*import { SortcountryPipe } from './_pipes/sortcountry.pipe';*/
import { FormsModule } from '@angular/forms';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedicalComponent } from './medical/medical.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      NavComponent,
      CountryinfoComponent,
     /* SortcountryPipe,*/
      MedicalComponent,
      CountrydetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    NgxChartsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,//za searchbar,
 //   ParticlesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
