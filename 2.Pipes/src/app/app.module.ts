import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LOCALE_ID } from '@angular/core'; //Formateo la fecha a español

//PIPES
import { capitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe'

@NgModule({
  declarations: [ //ACA PONGO LOS PIPES CREADOS
    AppComponent,
    capitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es"} //Formateo la fecha a español
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
