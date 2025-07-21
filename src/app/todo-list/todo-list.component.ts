import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TodoformComponent } from '../todoform/todoform.component';
import { DataService } from '../data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,TodoformComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  toDoArr : any [] = [];
  dataService = inject(DataService);
  cdr = inject(ChangeDetectorRef);
  constructor(public sanitizer: DomSanitizer) {}
  router = inject(Router);
  isCompleted : boolean = false;
  showButton : boolean = true;


ngOnInit(): void {
  this.loadToDo();
};

loadToDo (){
this.dataService.currentMessage.subscribe((res : any)=>{
  res;
  this.toDoArr = res;
  this.toDoArr = res.map((todo: any) => ({ title : todo, isCompleted: false }));
  
  
})
};

delete(index: number): void {
  if (index > -1 ) {
    this.toDoArr.splice(index, 1);
    this.cdr.detectChanges();
  }
};


markCompleted(index: number): void {
  this.toDoArr[index].isCompleted = true; // Mark task as completed
  console.log(this.toDoArr[index])
  this.cdr.detectChanges(); // Ensure the view is updated
}

edit(index : number){
    const task = this.toDoArr[index];
    console.log(this.router.navigate(['/editToDo'],{
      queryParams :{
      index : index,
      message : JSON.stringify(task)}}));
  
  }
}





