import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Store, USER_RUNTIME_CHECKS } from "@ngrx/store";
import { Subscription, Observable } from "rxjs";
import { ProductService } from "../shared/productService";
import { getProducts, getError, getCurrentProduct } from "../state/products/product.selector";
import * as ProductActions from '../state/products/product.actions'
import { IProduct } from "./product";
import { State } from "../state/products/product.state";
import { CartService } from "../shared/cartService";
import { AuthService } from "../users/authservice";  
// import { state } from "@angular/animations";
import { state, style, transition, animate, trigger } from '@angular/animations';
@Component({
  selector: 'products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

  animations: [
    trigger('enlarge', [
       state('start', style({
          height: '150px'
       })),
       state('end', style({
          height: '250px'
       })),
       transition('start => end', [
          animate('1s 2s')
       ]),
       transition('end => start', [
          animate('1s 2s')
       ])
    ])
 ]

})
export class ProductListComponent implements OnInit ,OnDestroy {
errorMessage:string='';
sub!:Subscription;
prod!:IProduct;
products:IProduct[]=[];
pageTitle:string="Product List "
filteredProducts:IProduct[]=[];
selectedProduct!:IProduct | null;
filterValue!:string;
href:string='';
isAdmin: boolean= false;
showProductCode: boolean = true;
c!:string;
// --- 

//******************** declared below are observables for which we will use async pipe in template , no sub/unsub*/
products$!:Observable<IProduct[]>;
selectedProduct$!:Observable<any>;
errorMessage$!: Observable<string>;

//*************** */
dataReceived=this.productService.getProducts();
obsProducts$!:Observable<IProduct[]>;
@Output() OnProductSelection:EventEmitter<IProduct>=new EventEmitter<IProduct>();
  errMssg: any;

  constructor(private productService:ProductService, private cartService: CartService, private authService: AuthService,
    private router:Router,private store:Store<State>){ }


  ngOnInit(): void {
    this.href=this.router.url;
    this.isAdmin = this.authService.currentUser.isAdmin;
  
   // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.products$ = this.store.select(getProducts);
    this.products$.subscribe(
      (resp) => {
        this.products = resp;
         this.filteredProducts=resp;
        });
    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductActions.loadProducts());

    // Do NOT subscribe here because it uses an async pipe
    this.selectedProduct$ = this.store.select(getCurrentProduct); 
    this.filteredProducts= this.products;

     }

     ngOnDestroy(): void {
       //this.sub.unsubscribe();
  }

  filterData(val:string){
      val = val ? val.toLocaleLowerCase() : '';
      console.log('--inside--filter--', this.products);
    let data = this.products.filter((p:IProduct) => {

      return (p.name.toLocaleLowerCase()).indexOf(val) > -1;
    });
    this.filteredProducts = data;
    console.log(data.length, 'data');
  }

  onRatingClicked(msg:string):void{
    this.pageTitle='My Angular App ' +msg;
  }

 onSelect(p:IProduct){
  this.OnProductSelection.emit(p);
  this.store.dispatch(ProductActions.initializeCurrentProduct());
  // this.router.navigate([this.href,'products']);
 }

newProduct():void{

  // this.productService.changeSelectedProduct(this.productService.newProduct());
  // console.log('back to newProduct from service ');
  this.store.dispatch(ProductActions.initializeCurrentProduct());
   this.router.navigate([this.href,'addProduct']);
}
 productSelected(product:IProduct):void{
  //this.productService.changeSelectedProduct(product);
  this.store.dispatch(ProductActions.setCurrentProduct({currentProductId:product.id}));
}
  getProductById(id:number):IProduct{
    this.productService.getProductById(id).subscribe(resp=>this.prod=resp);
    return this.prod;
  }
  addToCart(product: IProduct):void{
    this.cartService.addToCart(product);
   }

   toggleShowProductCode() {
    this.showProductCode = !this.showProductCode;
   }

  //  code for alert message when we click on add to cart button 
   public isVisible: boolean = false;

  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,1500)
  }

  deleteProduct(prod:IProduct):void{
    if(prod && prod.id){

      if(confirm(`Are you sure you want to delete ${prod.name} details`)){


        this.store.dispatch(ProductActions.deleteProduct({ productId: prod.id }));

       
      }
      else{
this.store.dispatch(ProductActions.clearCurrentProduct());

    
      }
    }
  }






  



  updateProduct(p:IProduct):void{
    this.productSelected(p);
    // this.store.dispatch(ProductActions.initializeCurrentProduct());
   this.router.navigate([this.href,'editProduct']);
  }

}
