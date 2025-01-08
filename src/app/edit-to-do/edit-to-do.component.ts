import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-to-do',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './edit-to-do.component.html',
  styleUrl: './edit-to-do.component.css'
})
export class EditToDoComponent implements OnInit {

  taskIndex : number|null = null;
  taskMessage : string =''; 

  constructor(private sanitizer : DomSanitizer, private route:ActivatedRoute){}
  dataService = inject(DataService);
  router = inject(Router);


  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.taskIndex = +params['index'];
      const task = params['message']?JSON.parse(params['message']):null;
      this.taskMessage = task?task.title:'';
    })
  }


  saveTask(){
    console.log('update', this.taskMessage);
    if(this.taskIndex !== null){
      this.dataService.upDateData(this.taskIndex,this.taskMessage);
      this.router.navigate(['/todo-list']);
    }
    
  }


}
