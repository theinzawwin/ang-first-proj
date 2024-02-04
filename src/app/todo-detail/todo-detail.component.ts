import { Component } from '@angular/core';
import { Todo } from '../models/Todo';
import { PostapiService } from '../services/postapi.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss'
})
export class TodoDetailComponent {
  todo!:Todo;
  id!:number;
 constructor(private route: ActivatedRoute,private todoService: PostapiService){
  this.id =this.route.snapshot.params["id"];
  console.log(`Todo Id=> ${this.id}`);
 }

 ngOnInit() {
  this.todoService.getTodo(this.id).subscribe(res=>{
    console.log(`Detail => ${JSON.stringify(res)}`);
    this.todo = res;
  })
 }
}


