import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendserviceService {

  s=new Subject <any>
  
  constructor() { }
  list:any;
  
  setvalue(n:any){
   this.list=n;
   this.s.next(this.list);
  
  }
  
}
