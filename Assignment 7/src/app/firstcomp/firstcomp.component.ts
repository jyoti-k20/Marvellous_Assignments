import { Component } from '@angular/core';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent {

  public fun () 
  {
    return "Marvellous Infosystem"

  }
  public Output="Marvellous Infosystem"
  public myaction()
  {
    return this.Output="Educating for better tomorrow"
  }

  public Upper=""

  public action()
  {
    return this.Upper="MARVELLOUS INFOSYSTEMS"
  }

  public Lower=""

  public action1()
  {
    return this.Lower="marvellous infosystem"
  }
  
}

