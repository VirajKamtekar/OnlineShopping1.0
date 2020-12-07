import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-comp/home.component';
import { NavbarCompComponent } from './navbar-comp/navbar-comp.component';
import { SearchCompComponent } from './search-comp/search-comp.component';
import { ProdListCompComponent } from './prod-list-comp/prod-list-comp.component';
import { SliderComponent } from './slider-comp/slider-component';
import { CardComponent } from './card-comp/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarCompComponent,
    SearchCompComponent,
    ProdListCompComponent,
    SliderComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
