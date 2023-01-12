import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppnavComponent } from './appnav/appnav.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './users/login.component';
import { MaterialModule } from './material.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    AppnavComponent,
    ApphomeComponent,
    AboutComponent,
    ContactComponent,
  
    CartComponent,
    LoginComponent,
    CartComponent,
    CarouselComponent,
    ProductsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
    // MatCarouselModule.forRoot(),
    
  
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }















