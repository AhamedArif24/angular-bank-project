import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  userDetailss:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"ahamed",acno:1001,password:"abc345",balance:0},
    1002:{username:"abus",acno:1002,password:"abc1567",balance:0},
    1003:{username:"abusi",acno:1003,password:"abc1789",balance:0},



  }
  constructor(private rout:Router ){

  }
  login(){
    if(this.acno in this.userDetailss)
    {
      if(this.pass==this.userDetailss[this.acno]['password'])
      {
        alert("You are successfully logged")
        this.rout.navigateByUrl("dashboard")
      }
      else{

        alert("enter correct password")
      }
    }
    else{
      alert("please enter accno")
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
