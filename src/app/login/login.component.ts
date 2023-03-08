import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="your perfect banking Partner"
  data1="Enter your Ac number"

  // acno:""
  // or

  acno:any
  pass:any

 
  constructor(private rout:Router,private ds:DataService ){

  }
  login(){
    const result=this.ds.login(this.acno,this.pass)
    if(this.acno>=0)
    {
      if(result)
      {
        alert("You are successfully logged")
        this.rout.navigateByUrl("dashboard")
      }
      else
      {
        alert("incorrect password")
      }
    }
    else{
      alert("Don't be empty this field")
    }
  }

    
    

  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   // console.log(this.acno);
    
  // }
  // passChange(event:any)
  // {
  //   this.pass=event.target.value
    
    
  // }
  
}
