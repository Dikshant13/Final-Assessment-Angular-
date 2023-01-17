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
            "name": "Mobile",
            "price": 25000,
            
            "image": "../../assets/mobile1.jpeg",
            "category": Category.electronic,
            "qty": 0,
            "rating": 4
        
          },{
            "id": 2,
            "name": "Pizza",
            "price": 180,
        
            "image": "../../assets/pizza.jpeg",
            "category": Category.food,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 3,
            "name": "Jeans",
            "price": 1800,
        
            "image": "../../assets/jeans.jpg",
            "category": Category.clothing,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 4,
            "name": "Laptop",
            "price": 55000,
            
            "image": "../../assets/laptop2.jpg",
            "category": Category.electronic,
            "qty": 0,
            "rating": 3
        
          },{
            "id": 5,
            "name": "Jacket",
            "price": 2200,
        
            "image": "../../assets/jacket.jpg",
            "category": Category.clothing,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 6,
            "name": "Lg Tv",
            "price": 45000,
        
            "image": "../../assets/lgtv.jpeg",
            "category": Category.electronic,
            "qty": 0,
            "rating": 3.5
        
          },{
            "id": 7,
            "name": "Shirt",
            "price": 2800,
        
            "image": "../../assets/shirt.jpg",
            "category": Category.clothing,
            "qty": 0,
            "rating": 5
        
          },{
            "id": 8,
            "name": "Burger",
            "price": 120,
            
            "image": "../../assets/burger.jpeg",
            "category": Category.food,
            "qty": 0,
            "rating": 4
        
          },
          {
            "id": 9,
            "name": "T-shirt",
            "price": 800,
            
            "image": "../../assets/tshirt.jpg",
            "category": Category.clothing,
            "qty": 0,
            "rating": 4
        
          },
          {
            "id": 10,
            "name": "Camera",
            "price": 32000,
        
            "image": "../../assets/camera1.jpg",
            "category": Category.electronic,
            "qty": 0,
            "rating": 4
        
          }];

        

        

        return {products};
    }

}