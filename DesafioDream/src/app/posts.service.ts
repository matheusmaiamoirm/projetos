import { Post } from './posts-list/posts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly API = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Post[]>(this.API);
  }
}
