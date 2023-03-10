import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetailss:any={
    1000:{username:"anu",acno:1000,password:"abc123",balance:0},
    1001:{username:"ahamed",acno:1001,password:"abc345",balance:0},
    1002:{username:"abus",acno:1002,password:"abc1567",balance:0},
    1003:{username:"abusi",acno:1003,password:"abc1789",balance:0},



  }
  register(acn:any,unu:any,pas:any){
    if(acn in this.userDetailss)
    {
      return false
    }
    else{
      this.userDetailss[acn]={username:unu,acno:acn,password:pas,balance:0}
      return true
    }
  }
  login(acno:any,pass:any){
    if(acno in this.userDetailss)
    {
      if(pass==this.userDetailss[acno]['password'])
      {
        return true
      }
      else{

       return false
      }
    }
   return false

    
   }
   deposit(accno:any,pass:any,amount:any)
   {
      var amnt=parseInt(amount)
      if(accno in this.userDetailss)
      {
        if(pass==this.userDetailss[accno]['password'])
        {
            this.userDetailss[accno]['balance']+=amnt
            return this.userDetailss[accno]['balance']
        }
        else{
          return false
        }
      }
      else{
        return false
      }
   }
   withdrawl(accno:any,pass:any,amount:any)
   {
      var amnt=parseInt(amount)
      if(accno in this.userDetailss)
      {
        if(pass==this.userDetailss[accno]['password'])
        {
          if(amnt<=this.userDetailss[accno]['balance'])
          {
            this.userDetailss[accno]['balance']-=amnt
            return this.userDetailss[accno]['balance']
          }
          else{
            alert("insufficient amount please enter another amount")
          }
        }
        else{
          return false
        }
      }
      else{
        return false
      }
   }
  

  constructor() { }
}
