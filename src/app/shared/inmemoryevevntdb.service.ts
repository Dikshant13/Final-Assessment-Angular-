import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category, IProduct } from "src/app/products/product";


@Injectable({
    providedIn: 'root'
})

export class InMemoryEventDbService implements InMemoryDbService{
    createDb(){
        

        

        const products:IProduct[]=[{
            "id": 1,
            "name": "Product1",
            "price": 2000,
            "image": "../../assets/mobile.jpeg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          },{
            "id": 2,
            "name": "Product2",
            "price": 1000,
            "image": "../../assets/grocery.jpg",
            "category": Category.grocery,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 3,
            "name": "Product3",
            "price": 3000,
            "image": "../../assets/shirt.jpg",
            "category": Category.shirt,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 4,
            "name": "Product4",
            "price": 1500,
            "image": "../../assets/top.jpg",
            "category": Category.top,
            "qty": 0,
            "rating": 3
        
          },{
            "id": 5,
            "name": "Product5",
            "price": 1000,
            "image": "../../assets/food.jpg",
            "category": Category.food,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 6,
            "name": "Product6",
            "price": 2000,
            "image": "../../assets/food.jpg",
            "category": Category.food,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 7,
            "name": "Product7",
            "price": 3000,
            "image": "../../assets/shirt.jpg",
            "category": Category.shirt,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 8,
            "name": "Product8",
            "price": 4000,
            "image": "../../assets/jeans.jpg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          },
          {
            "id": 9,
            "name": "Product9",
            "price": 4000,
            "image": "../../assets/jeans.jpg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          },
          {
            "id": 10,
            "name": "Product10",
            "price": 4000,
            "image": "../../assets/jeans.jpg",
            "category": Category.jeans,
            "qty": 0,
            "rating": 4
        
          }];

        

        

        return {products};
    }

}