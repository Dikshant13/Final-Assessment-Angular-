import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppnavComponent } from './appnav/appnav.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './carts/cart.component';
import { LoginComponent } from './users/login.component';
import { MaterialModule } from './material.module';
import { CarouselComponent } from './carousel/carousel.component';
// import { ProductListComponent } from './products/product-list.component';
// import { StarIconComponent } from './star/star-icon.component';
// import { ProductsComponent } from './products/products.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effect';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryEventDbService } from './shared/inmemoryevevntdb.service';
import { TransformDataPipe } from './transform-data.pipe';
// import { StarIconComponent } from './star/star-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    AppnavComponent,
    ApphomeComponent,
    AboutComponent,
    ContactComponent,
    TransformDataPipe,
    LoginComponent,
    CartComponent,
    CarouselComponent,
    // ProductListComponent,
  
    
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    InMemoryWebApiModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    //EffectsModule.forRoot([AppEffects]),
StoreModule.forRoot({}),
    //have to create AppEffects
    EffectsModule.forRoot([AppEffects]),

   
    StoreDevtoolsModule.instrument(),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService),
  
    
  
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }















