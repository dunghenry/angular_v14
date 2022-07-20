import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
interface IPost{
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private httpClient: HttpClient) {}
  getListPosts() : Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`);
  }
  createPost(post: IPost): Observable<IPost> {
    return this.httpClient.post<IPost>('https://jsonplaceholder.typicode.com/posts', post);
  }
  updatePost(postId: number, post: IPost): Observable<IPost> {
    return this.httpClient.put<IPost>(`https://jsonplaceholder.typicode.com/posts/${ postId }`, post);
  }
  updateOptionPost(postId: number, post: Partial<IPost>): Observable<IPost> {
    return this.httpClient.patch<IPost>(`https://jsonplaceholder.typicode.com/posts/${ postId }`, post);
  }
  deletePost(postId: number): Observable<any> {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${ postId }`);
  }
}

