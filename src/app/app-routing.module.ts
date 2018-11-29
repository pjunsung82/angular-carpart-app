import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {RacesComponent} from './race/race.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'carpart', component: CarpartsComponent},
  {path: 'race', component: RacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
