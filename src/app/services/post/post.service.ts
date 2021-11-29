import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from 'src/app/interfaces/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {


  private heroesUrl = 'http://localhost:3000/post';  
  constructor(private http: HttpClient) {
    
   }

  getListPost(): Observable<Post[]> {
      return this.http.get<Post[]>(this.heroesUrl)
  }

  getPost(id: number): Observable<Post> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    return this.http.get<Post>(this.heroesUrl+"/"+id)
  }

}
