import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category, IProduct } from "src/app/products/product";


@Injectable({
    providedIn: 'root'
})

export class InMemoryEventDbService implements InMemoryDbService{
    createDb(){
        

        

        const products:IProduct[]=[{
            "id": 100,
            "name": "Product1",
            "price": 2000,
            "image": "../../assets/jeans.jpg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          },{
            "id": 101,
            "name": "Product2",
            "price": 1000,
            "image": "../../assets/grocery.jpg",
            "category": Category.grocery,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 102,
            "name": "Product3",
            "price": 3000,
            "image": "../../assets/shirt.jpg",
            "category": Category.shirt,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 103,
            "name": "Product4",
            "price": 1500,
            "image": "../../assets/top.jpg",
            "category": Category.top,
            "qty": 0,
            "rating": 3
        
          },{
            "id": 104,
            "name": "Product5",
            "price": 1000,
            "image": "../../assets/food.jpg",
            "category": Category.food,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 105,
            "name": "Product6",
            "price": 2000,
            "image": "../../assets/food.jpg",
            "category": Category.food,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 106,
            "name": "Product7",
            "price": 3000,
            "image": "../../assets/shirt.jpg",
            "category": Category.shirt,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 107,
            "name": "Product8",
            "price": 4000,
            "image": "../../assets/jeans.jpg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          }];

        

        

        return {products};
    }

}