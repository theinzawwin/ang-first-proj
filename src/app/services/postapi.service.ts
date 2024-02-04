import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/Todo';
@Injectable({
  providedIn: 'root'
})
export class PostapiService {

  constructor(private http: HttpClient) { }

  getTodoList(){
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
  getTodo(id:number){
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
