import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable, of } from 'rxjs';
import { PostCollection } from '../interfaces/post-collection';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  apiUrl: string = environment.apiUrl + "/public/api/posts/";

  constructor(private http: HttpClient) { }

  public getAll(url: string): Observable<PostCollection> {
    return this.http.get<PostCollection>(environment.apiUrl + url); 
  }

  public get(id: string): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + id);
  }

  public add(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  public update(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + id, post);
  }

  public delete(post: Post): Observable<Post> {
    return this.http.delete<Post>(this.apiUrl + post.id);
  }
}
