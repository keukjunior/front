import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { NewannonceComponent } from './newannonce/newannonce.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    NewannonceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
