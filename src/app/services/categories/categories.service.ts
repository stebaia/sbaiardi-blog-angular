import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoryUrl = 'http://localhost:3000/categories';  
  constructor(private http: HttpClient) {
    
   }

  getListCategory(): Observable<Category[]> {
      return this.http.get<Category[]>(this.categoryUrl)
  }

  getCategory(id: number): Observable<Category> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    return this.http.get<Category>(this.categoryUrl+"/"+id)
  }
}
