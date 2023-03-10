import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private dash:DataService){

  }
  accno:any
  passw:any
  amount:any
  accno1:any
  passw1:any
  amount1:any
  deposit()
  {
    const result=this.dash.deposit(this.accno,this.passw,this.amount)
    if(result)
    {
      alert(`your account has been credited the amount of ${this.amount} and the available balance is ${result}`)
    }
    else{
      alert("incorrect accnon or password")
    }
  }
  withdrawl()
  {
    const result=this.dash.withdrawl(this.accno1,this.passw1,this.amount1)
    if(result)
    {
      alert(`your account has been debited the amount of ${this.amount1} and the available balance is ${result}`)
    }
    else{
      alert("incorrect accnon or password")
    }
  }

}
