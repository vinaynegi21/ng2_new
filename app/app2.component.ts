import { Component } from '@angular/core';
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

@Component({
    selector : 'my-app2',
    templateUrl: 'app/app2.component.html'
})



export class App2Component {
    
pageTitle = 'Product page';
showImage = false;

toggleImage() : void { 
              
         this.showImage =! this.showImage;
}
products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://localhost:8808/app/assets/images/garden_cart.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://localhost:8808/app/assets/images/rejoin_Hammer.jpg"
        }
    ];
}