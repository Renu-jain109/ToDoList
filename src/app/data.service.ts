import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<any>([]); // Initialize with empty string or default
  currentMessage = this.messageSource.asObservable();

  changeMessage(toDoArr: any[], message: string) {
    this.messageSource.next(message);
  }

  constructor() { }
  formData : any = [];

  addData (data : any){
    console.log(this.currentMessage);
    let temp = [] ;
    this.currentMessage.subscribe((res : any)=>{
      temp = res;
    })
temp.push(data)    
this.messageSource.next(temp);
  };


  getData (){
    return this.formData;
  };
  

  upDateData (index : number, message : string){
    let temp = [];
    this.currentMessage.subscribe((res : any)=>{
      temp = res;
    });
    if(index > -1 && index < temp.length){
      temp[index] = message;
      this.messageSource.next(temp);
    }
  }

}
