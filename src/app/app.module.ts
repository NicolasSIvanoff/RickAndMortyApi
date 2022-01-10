import { CharacterComponent } from './characters/character.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { EpisodeoComponent } from './episodeos/episodeo.component';
import { HeaderComponent } from './header/header.component';
import { CarrosselComponent } from './carrossel/carrossel.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    LocationsComponent,
    EpisodeoComponent,
    HeaderComponent,
    CarrosselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
