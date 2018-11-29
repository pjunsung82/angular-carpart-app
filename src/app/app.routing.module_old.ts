
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {CarpartsComponent} from './carparts/carparts.component';
import {NgModule} from '@angular/core';

export const ROUTERS: Routes = [
  {path: '', component: AboutComponent},
  {path: 'carpart', component: CarpartsComponent}
]

@NgModule({
  imports : [RouterModule.forRoot(ROUTERS)],
  exports : [RouterModule]
})
export class AppRoutingModule_old {

}
