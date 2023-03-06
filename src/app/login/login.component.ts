import { Component } from '@angular/core';

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

  userDetailss={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"ahamed",acno:1001,password:"abc345",balance:0},
    1002:{username:"abus",acno:1002,password:"abc1567",balance:0},
    1003:{username:"abusi",acno:1003,password:"abc1789",balance:0},



  }
  login(){
    alert('Login worked')
  }

  acnoChange(event:any){
    this.acno=event.target.value
    // console.log(this.acno);
    
  }
  passChange(event:any){
    console.log(event.target.value);
    
  }
}
