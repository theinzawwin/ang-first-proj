import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  },
  {path:'todo-list', component: TodoListComponent},
  { path: 'contact', component: ContactComponent },
  {path:'aboutus', component: AboutusComponent},

  {path:'todo-detail/:id',component: TodoDetailComponent}
];
