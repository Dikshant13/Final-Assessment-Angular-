import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AppnavComponent } from './appnav/appnav.component';

import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './users/auth-guard.service';
import { LoginComponent } from './users/login.component';


const routes: Routes = [

{path:'',pathMatch:'full',redirectTo:'apphome'},
  {
    path:'appnav',component:AppnavComponent,
    
  },

 
  {
    path:'apphome',component:ApphomeComponent,
    // canActivate:[AuthGuard],
  },
  
  {
    path:'cart',component:CartComponent,
  
  },
  {
    path:'about',component:AboutComponent,
  },
  {
    path:'contact',component:ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
