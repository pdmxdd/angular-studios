import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AstronautsComponent } from './astronauts/astronauts.component';
import { CountriesComponent } from './countries/countries.component';
import { MissionsComponent } from './missions/missions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AstronautsComponent,
    CountriesComponent,
    MissionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
