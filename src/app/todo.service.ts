import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
addToDoList : any [] = [];

  addToDo (toDo : any){
  return this.addToDoList.push(toDo);
  }
}
