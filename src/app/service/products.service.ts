import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product, ProductCreate } from '../types/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Khai báo http để có đối tượng HttpClient tương tác với các phương thức của API
  constructor(private http:HttpClient) { }

  // Kiểu dữ liệu Observable sẽ giúp lắng nghe API trả về kq
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products);
  }

  getProduct (id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.product}/${id}`);
  }

  deleteProduct (id: number|string): Observable<any> {
    return this.http.delete(`${environment.product}/${id}`);
  }

  // Dữ liệu gửi đi {name: string}, nhận về {id: number, name: string}
  createProduct (data: ProductCreate): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`, data);
  }
}