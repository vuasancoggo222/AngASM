import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../types/Products';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>(environment.categories);
  }
  getCategory (id : string): Observable<Category> {
    return this.http.get<Category>(`${environment.category}/${id}`);
  }
}
