import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './interfaces/post';
import { Observable } from 'rxjs';

const MAIN_URL: string = 'https://jsonplaceholder.typicode.com/posts';

@Injectable()
export class PostService {
  constructor(private _http: HttpClient) {}

  listarPosts(): Observable<any> {
    return this._http.get(MAIN_URL);
  }

  postData(subject: string, content: string): Observable<any> {
    const data: Post = {
      title: subject,
      body: content,
      userId: 1,
    };
    return this._http.post(MAIN_URL, data);
  }

  editarPost(subject: string, content: string, id: number): Observable<any> {
    const data: Post = {
      title: subject,
      body: content,
      userId: 1,
    };
    return this._http.put(`${MAIN_URL}/${id}`, data);
  }

  eliminarPost(id: number): Observable<any> {
    return this._http.delete(`${MAIN_URL}/${id}`);
  }
}
