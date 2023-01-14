
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges{
  total:number=0;

  ngOnInit(): void {
   
  }
  


  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.total);
    //console.log(this.prot.price);
    //console.log(this.prot.quantity);
    //this.prot=this.prot;
    //this.total+=(this.prot.price*this.prot.quantity);
    console.log(this.total);
    
    
    console.log(this.total);
  }

  @Input() prot:IProduct[]=[];

   calculate():void{
    this.total=this.prot.reduce((sum, curr)=>{
      return sum+(curr.price*curr.qty);
    },0);
  }


}
