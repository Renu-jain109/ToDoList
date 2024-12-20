import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }
  toDoArr : any [] = [];

  saveToDo (toDo : any){
  return this.toDoArr.push(toDo);
  }
    
}
