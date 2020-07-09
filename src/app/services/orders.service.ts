import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl = 'http://localhost:8008/api/v1/order'; 
  
  constructor(private httpClient:HttpClient, private router:Router, private auth:AuthService) { }
  getOrders(){
    let token = this.auth.gettoken();
    console.log(token);
    let headers = new HttpHeaders().set('Authorization',token);
    return this.httpClient.post(this.baseUrl,null, { headers: headers })
  }
  getDetails(orderId){
    let token = this.auth.gettoken();
    console.log(token);
    let headers = new HttpHeaders().set('Authorization',token);
    
    //headers.set('Authorization',token);
    return this.httpClient.post(this.baseUrl,{orderId:orderId}, { headers: headers })
  }
}
