import { Component,OnInit } from '@angular/core';
import { SendserviceService } from '../sendservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  place1="Enter Name";
  place2="Enter Description";

  nameVal:string="";
  desVal:string="";

  value1(val:string){
    this.nameVal=val;
  }

  value2(val:string){
    this.desVal=val;
    console.log(this.nameVal,this.desVal);
  }

  constructor(private share:SendserviceService){}

  list:any=[];
  p:any;

  createobject(){  
    
    this.p={
      name:this.nameVal,
    description:this.desVal
    }

    this.list.push(this.p);
    console.log(this.list);
    this.share.setvalue(this.list);
  }
  
}