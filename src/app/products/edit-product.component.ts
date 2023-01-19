import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription, tap } from "rxjs";
import { GenericValidator } from "../shared/GenericValidator";
import { ProductService } from "../shared/productService";
import { getCurrentProduct } from "../state/products/product.selector";
import { IProduct, Category } from "./product";
import * as ProductActions from '../state/products/product.actions';
import { State } from "../state/products/product.state";
// import {EditProductComponent} from './edit-product.component';
@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit ,OnDestroy {
  pageTitle='Edit Product';
  errorMessage='';
  product$!: Observable<IProduct | null | undefined  >;

  editProduct!: FormGroup;
  product!:IProduct | null | undefined;
  sub!:Subscription;
  displayMessage: {[key:string]:string}={};
    private validationMessages!:{[key:string]:{[key:string]:string}};

    private genericValidator!:GenericValidator;

    constructor(private store:Store<State>,private formBuilder: FormBuilder,private router: Router, private productService:ProductService ) {

      this.validationMessages={

      name:{
        required:'Product name is required ',
        minLength:'Product name must have 3 characters',
        maxLength:'Product name must have less than  equal to 10 chars'
      },
      category:{
        required:'Category is required'
      },
      price:{
        required:'Price is required'
      },image:{
        required:'Image is required'
      },rating:{
        required:'Rating is required'
      },


      };
      this.genericValidator=new GenericValidator(this.validationMessages);

   }
  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }


  ngOnInit() {
    this.editProduct = this.formBuilder.group({
      id: [],
      name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      // code:['',[Validators.required]],
      category:[Category.clothing,[Validators.required]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
      rating:[3,[Validators.required]]

    });


// Watch for changes to the currently selected product
    this.product$ = this.store.select(getCurrentProduct)
      .pipe(
        tap(currentProduct => this.displayProduct(currentProduct))
      );

    this.product$.subscribe(resp=>{
        this.product=resp;
        console.log(resp, '-respp--')
    });

    // this.place$= this.store.select(getCurrentPlace).pipe(
    //     tap(currentPlace => this.displayPlace(currentPlace))
    //   );
  
    //   this.place$.subscribe(resp=> this.place=resp);



console.log('selected current product in ng onit edit product ',this.product);
    // Watch for value changes for validation
    this.editProduct.valueChanges.subscribe(
      () => this.displayMessage =
      this.genericValidator.processMessages(this.editProduct)
    );
console.log('value in form changes')



    //when the product is selected from the product list , it should be displayed on the form

    //this.sub=this.productService.selectedProductChanges$.subscribe(selProd=>this.displayProduct(selProd));


    this.editProduct.valueChanges.
    subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.editProduct));
  }
  get id(){
    return this.editProduct.get("id");
  }

  get name(){
    return this.editProduct.get("name");
    }

  get image(){
    return this.editProduct.get("image");
    }
  get price(){
    return this.editProduct.get("price");
      }
  get category(){
      return this.editProduct.get("category");
        }
  get rating(){
      return this.editProduct.get("rating");
        }

  /* onSubmit() {
    this.productService.createProduct(this.addProduct.value)
      .subscribe( data => {console.log(data);
        this.router.navigate(['products']);
      });
  }
 */
//method which renders the selected product on the form
  displayProduct(productParam:IProduct |null |undefined):void{
   console.log(this.product,'in display product of product Edit component ');
   this.product = productParam;
   if(this.product){
//reset the form to its original
    this.editProduct.reset();

    if(this.product.id==0){
      this.pageTitle='Add Product';
    }
    else{

      this.pageTitle=`Edit Product: ${this.product.name}`;

    }
 //update the data on the form
 this.editProduct.patchValue({
  id:this.product.id,
   name:this.product.name,
   image:this.product.image,
   rating:this.product.rating,
   price:this.product.price,
   category:this.product.category


 })


   }

  }

  saveProduct(originalProduct:IProduct):void{

    if(this.editProduct.valid){
      if(this.editProduct.dirty){
        //copy over all of the orginal product properties
        //we arecopying data from teh addform
        //{...} it ensures that values are not lost ids are retained
        const product={...originalProduct,...this.editProduct.value};

      if(product.id==0){

        this.store.dispatch(ProductActions.createProduct({product}));
        // this.productService.createProduct(product).subscribe(
        //   (resp)=>{
        //     this.productService.changeSelectedProduct(resp);
        //     console.log(resp);},

        //   (err)=>this.errorMessage=err
        // );

     }
     else{this.store.dispatch(ProductActions.updateProduct({ product }));


      // this.productService.updateProduct(product).subscribe(
      //  resp=>this.productService.changeSelectedProduct(resp),
      //  err=>this.errorMessage=err      );

     }
      }

      this.router.navigate(['products'])
    }

  }
//validating on blur ,if user tabs out through the form fields
  blur():void{
  this.displayMessage=this.genericValidator.processMessages(this.editProduct);

  }

  deleteProduct(prod:IProduct):void{
    console.log('----delete---');

    if(prod && prod.id){

      if(confirm(`Are you sure you want to delete ${prod.name} details`)){


        this.store.dispatch(ProductActions.deleteProduct({ productId: prod.id }));

        // this.productService.deleteProduct(prod.id).subscribe(
        //   resp=>this.productService.changeSelectedProduct(null),
        //   err=>this.errorMessage=err
        // );
      }
      else{
        // No need to delete, it was never saved
        this.store.dispatch(ProductActions.clearCurrentProduct());

     // this.productService.changeSelectedProduct(null)
      }
    }

  }
}