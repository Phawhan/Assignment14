import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {

@Input() placeholder:any;

@Output() inval=new EventEmitter<string>
  sendval(event:any){
    this.inval.emit(event.target.value)
  }
}
