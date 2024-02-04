import { Component } from '@angular/core';
import { Todo } from '../models/Todo';
import { PostapiService } from '../services/postapi.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  title = 'first-proj';
  todoList:Todo[]=[]
  constructor(private postService: PostapiService){

  }
  ngOnInit() {
    this.showTodoList();
  }
  showTodoList(){
    this.postService.getTodoList().subscribe((res:Todo[]) =>{
        console.log(`Result => ${JSON.stringify(res)}`);
        this.todoList = res;
    });
  }
}
