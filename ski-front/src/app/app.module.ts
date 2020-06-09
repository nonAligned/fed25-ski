import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeaderComponent } from './core/header/header.component';
import { ResortComponent } from './ski/resort/resort.component';
import { InfoComponent } from './ski/resort/info/info.component';
import { TracksComponent } from './ski/resort/tracks/tracks.component';
import { WeatherComponent } from './ski/resort/weather/weather.component';
import { SkipassComponent } from './ski/resort/skipass/skipass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    HeaderComponent,
    ResortComponent,
    InfoComponent,
    TracksComponent,
    WeatherComponent,
    SkipassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
