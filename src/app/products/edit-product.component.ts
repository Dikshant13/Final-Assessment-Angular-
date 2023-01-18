import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../shared/productService';
import { IProduct } from './product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class ProductEditComponent implements OnInit{
  editProduct!:FormGroup;
  
  onSubmit(){
    console.info(`The Item editd`);
    this.prodServ.updateProduct(this.editProduct.value).subscribe(data=>{
      console.log(data);
      this.router.navigate(['products']);
    });
    alert('updated');
    this.router.navigate(['products']);
  }

  constructor(private router:Router,private prodServ:ProductService,private fb:FormBuilder){}
  
  ngOnInit(): void {
    this.editProduct=this.fb.group({
      name:[''],
      price:[],
      image:['']
    });
  }
  
  cancel(){
    alert('no changes saved');
    this.router.navigate(['products']);
  }
}