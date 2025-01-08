import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  router = inject(Router);
todo : any ;
constructor(private dataService : DataService){}

addToDo () {
  if(this.todo)
console.log(this.todo);
this.dataService.addData([this.todo]);
this.router.navigate(['/todo-list'])

}
}
