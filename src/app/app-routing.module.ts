import { EpisodeoComponent } from './episodeos/episodeo.component';
import { LocationsComponent } from './locations/locations.component';
import { CharacterComponent } from './characters/character.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'episodeos', component: EpisodeoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
