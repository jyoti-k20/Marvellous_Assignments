import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public addanswer : number = 0;
  public subanswer : number = 0;

  

  constructor(private _ArithmeticService: ArithmeticService)
  {

  }
  ngOnInit() 
  {
    this.addanswer= this._ArithmeticService.addition();
    this.subanswer=this._ArithmeticService.substraction();

  }

}
