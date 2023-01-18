import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AppnavComponent } from './appnav/appnav.component';
import { CartComponent } from './carts/cart.component';
import { ContactComponent } from './contact/contact.component';
// import { ProductListComponent } from './products/product-list.component';

import { ProductAddComponent } from './products/product-add.component';
import { ProductListComponent } from './products/product-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AuthGuard } from './users/auth-guard.service';
import { LoginComponent } from './users/login.component';
import { CheckoutComponent } from './checkout/checkout.component';




const routes: Routes = [

// {path:'',pathMatch:'full',component:ApphomeComponent},
{path:'',pathMatch:'full',component:LoginComponent},
  // {
    // path:'appnav',component:AppnavComponent,
    
  // },

  {path:'login',component:LoginComponent},

  {
    path:'apphome',component:ApphomeComponent,

  },

  {
    path:'products',component:ProductListComponent,
  // canActivate:[AuthGuard],
  loadChildren:()=>import('../app/product/product.module').then(m=>m.ProductModule)
  },
  
  {
    path:'carts',component:CartComponent,
  
  },
  {
    path:'about',component:AboutComponent,
  },
  {
    path:'contact',component:ContactComponent,
  },
  {
    path:'checkout',component:CheckoutComponent,
  },
  // {
  //   path:'footer',component:FooterComponent,
  // }
  {
    path:'**',component:PagenotfoundComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
