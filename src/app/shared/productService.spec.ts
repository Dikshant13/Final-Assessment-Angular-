import { getTestBed, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Category, IProduct } from "src/app/products/product";
import { ProductService } from "./productService";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";



describe('ProductService',()=>{

    let service:ProductService;
    let products:any=[];
    let injector: TestBed;
    let httpMock: HttpTestingController;
  beforeEach(()=>{

     TestBed.configureTestingModule({
     imports: [HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule ],
     
        providers:[ProductService],

     });

     service=TestBed.inject(ProductService);
     injector = getTestBed();
     httpMock = injector.inject(HttpTestingController);
     products=[
      {
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
    
      },,
      {
        "id": 10,
        "name": "Camera",
        "price": 32000,
    
        "image": "../../assets/camera1.jpg",
        "category": Category.electronic,
        "qty": 0,
        "rating": 4
      }
    ]
  });

  it('should be created',()=>{
    expect(service).toBeTruthy();

  })

  it('should getAllProducts',()=>{
      let response:IProduct[]=[];
      let functionCalled=spyOn(service, 'getProducts').and.returnValue(of(products));
      service.getProducts().subscribe(res=>{
        expect(res).toEqual(products);
      });
     expect(functionCalled).toHaveBeenCalled();
    })
    it('should create products',()=>{

      const product1=

          {
            "id": 6,
            "name": "Lg Tv",
            "price": 45000,
        
            "image": "../../assets/lgtv.jpeg",
            "category": Category.electronic,
            "qty": 0,
            "rating": 3.5
           
           };
           products =[...products,product1];
           service.createProduct(products).subscribe(res=>expect(res).toEqual(product1) )
           expect(products.length).toEqual(8);
           const req = httpMock.expectOne(service.url);
           expect(req.request.method).toBe('POST');
           req.flush(product1);

           });
           it(' Update Product should update product',()=>{



            let product2 ={
                "id": 4,
                "name": "Laptop",
                "price": 55000,
                
                "image": "../../assets/laptop2.jpg",
                "category": Category.electronic,
                "qty": 0,
                "rating": 3
          
             };
             service.updateProduct(product2).subscribe(res=>expect(res).toEqual(product2) )
             const req = httpMock.expectOne(`${service.url}/${product2.id}`);
             expect(req.request.method).toBe('PUT');
             req.flush({product2 });
      
             })
             it('should get product by id',()=>{
              let response:IProduct;
             let product1 ={
              "id":1,
                "name":"mobile",
                "price":25000,
                "image":"../../assets/mobile1.jpeg",
                  "rating":4,
                 "category":Category.electronic
             
             };
            
              const fn=spyOn(service, 'getProductById').and.returnValue(of(product1));
              service.getProductById(1).subscribe(res=>{response=res;expect(response).toEqual(product1);});
             expect(fn).toHaveBeenCalled();
            });




            
   it('deletProduct () should delete  a product',()=>{
    service.deleteProduct(6).subscribe(resp=>expect(resp).toEqual({}) )
    const req = httpMock.expectOne(`${service.url}/${6}`);
    expect(req.request.method).toBe('DELETE');

    })







    it('updateProduct () should update  a product and return updated product as data',()=>{
      let product1 ={
            "id": 3,
            "name": "Jeans1",
            "price": 1800,
            "image": "../../assets/jeans.jpg",
            "category": Category.clothing,
            "rating": 5

       };

       service.updateProduct(product1).subscribe(resp=>expect(resp).toEqual(product1) )

       const req = httpMock.expectOne(`${service.url}/${product1.id}`);
       expect(req.request.method).toBe('PUT');
       req.flush({product1});

       })


})