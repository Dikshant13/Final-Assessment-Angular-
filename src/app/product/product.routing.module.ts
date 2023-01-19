import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductAddComponent } from "../products/product-add.component";
import { EditProductComponent } from "../products/edit-product.component";

const productRoutes: Routes = [
    // { path: 'addProduct', component: ProductAddComponent },
    // { path: 'editProduct', component: EditProductComponent }


    {path: 'addProduct', component: ProductAddComponent },
    {path: 'editProduct', component: EditProductComponent }

  ];
  
  @NgModule({
    imports: [
  
      RouterModule.forChild(productRoutes),],
    exports:[RouterModule]})
  export class ProductRoutingModule{
  
  }