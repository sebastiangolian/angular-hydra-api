import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommentCollection } from '../interfaces/comment-collection';
import { Observable, of } from 'rxjs';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiUrl: string = environment.apiUrl + "/public/api/comments/";

  constructor(private http: HttpClient) { }

  public getAll(url: string): Observable<CommentCollection> {
    return this.http.get<CommentCollection>(environment.apiUrl + url); 
  }

  public add(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, comment);
  }

  public delete(comment: Comment): Observable<Comment> {
    return this.http.delete<Comment>(this.apiUrl + comment.id);
  }
}
