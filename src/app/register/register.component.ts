import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds:DataService){

  }

  acno:any
  unam:any
  pass:any
  register(){
    const result=this.ds.register(this.acno,this.unam,this.pass)
    if(result)
    {
      alert(" registerd to this bank")
    }
    else{
      alert("this account number already exist")
    }

  }


}
