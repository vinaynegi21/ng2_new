import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

@Injectable()
export class ProductService {
     private _productUrl= './app/products.json';
     constructor(private _http: HttpClient) { }
     getProducts(): Observable<any[]> {
    return this._http.get<any[]>(this._productUrl);
}
    /*getProducts(): any {
    
     let   products: IProduct[] = [
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

    return products;
    }*/
}