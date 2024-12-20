import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoformComponent } from '../todoform/todoform.component';
import { TodoformService } from '../todoform/todoform.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,TodoformComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
ngOnInit(): void {
  this.loadToDo();
};
toDoArr : any [] = [];

loadToDo (){
  const storeToDo = [];
  const todo = history.state?.toDo;
if(todo ){
  this.toDoArr.push(todo);
  storeToDo.push(this.toDoArr);
}
};
}
