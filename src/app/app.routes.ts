import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoformComponent } from './todoform/todoform.component';
import { EditToDoComponent } from './edit-to-do/edit-to-do.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },{
        path:'todo-list',
        component:TodoListComponent
    },{
        path:'todoform',
        component:TodoformComponent
    },{
        path:'editToDo',
        component:EditToDoComponent
    },
    {
        path:'**',
        redirectTo: ''
    }
];
