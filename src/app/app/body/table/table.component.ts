import { Component, Input, OnInit } from '@angular/core';
import { SendserviceService } from '../../sendservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  @Input() data:any;
  
  people=[{name:"", description:""}];

  constructor(private receiveservice : SendserviceService){  }

  ngOnInit(){
    this.receiveservice.s.subscribe(msg=>this.people=msg)
    this.people.splice(0,1);
   
  }

  del(i:number){
    this.people.splice(i,1)
  }
}
