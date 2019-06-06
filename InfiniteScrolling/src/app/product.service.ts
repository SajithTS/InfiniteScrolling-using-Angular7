import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //baseUrl = "http://localhost:37247";
  baseUrl = "http://192.168.0.114/DeliveryAPI";
  constructor(private http:HttpClient) { }

  GetAllProducts(Categoryid: number,SubcategoryId :number,SubCategoryOneId :number,ProductId:number,Min:number,Max:number,PageNo:number,Limit:number){
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "");
    headers.append("Access-Control-Request-Method", "POST");
    headers.append("Access-Control-Allow-Credentials", "true");

    return this.http.post(this.baseUrl + "/api/Eshop/ProductPricefilter/"+ Categoryid + "/" + SubcategoryId + "/" + SubCategoryOneId+ "/" + ProductId + "/" + Min + "/" + Max+"/"+ PageNo + "/" + Limit, {
      headers: headers
    });
  }
}
