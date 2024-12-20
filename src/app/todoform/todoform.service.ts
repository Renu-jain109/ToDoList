import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoformService {

  constructor() { }

  toDoArr : any []=[];

  addToDo (toDo : any){
    this.toDoArr.push(toDo);
  };

  getToDo (){
    this.toDoArr;
  }
}
