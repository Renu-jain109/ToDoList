import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoformService } from './todoform.service';

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


addToDo () {
  if(this.todo)
console.log(this.todo);

this.router.navigate(['/todo-list'],{state :{toDo : this.todo}});

}
}
