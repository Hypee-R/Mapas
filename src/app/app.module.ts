import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';

//Angular Material
import { MaterialModule } from './material.module';
import { MapaEditarComponent } from './components/mapa-editar/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBxKhSv74AIImQbT5Ic0CMXys5UChmmEo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
