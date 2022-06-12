import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product, ProductCreate } from '../types/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
 user:any = JSON.parse(localStorage.getItem('loggedInUser') as string);
  // Kiểu dữ liệu Observable sẽ giúp lắng nghe API trả về kq
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products);
  }

  getProduct (id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.product}/${id}`);
  }

  deleteProduct (id: number|string): Observable<any> {
    return this.http.delete(`${environment.product}/${id}/${this.user.user._id}`,{headers: {"Authorization": `Bearer ${this.user.token}`}});
  }

  // Dữ liệu gửi đi {name: string}, nhận về {id: number, name: string}
  createProduct (data: ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}/${this.user.user._id}`,data,{headers: {"Authorization": `Bearer ${this.user.token}`}});
  }
  updateProduct (id:string,data: any): Observable<Product> {
    return this.http.put<any>(`${environment.product}/${id}/${this.user.user._id}`,data,{headers: {"Authorization": `Bearer ${this.user.token}`}})
  }
}