import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarpartsComponent } from './carparts/carparts.component';
import {FormsModule} from '@angular/forms';
import {CarpartsDataService} from './carparts/caprts-data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarpartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //providers: [CarpartsDataService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
