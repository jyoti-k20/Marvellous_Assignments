import { Component,OnInit } from '@angular/core';
import { StringService } from '../string.service';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  public x :number= 0

  constructor(private _stringservices: StringService)
  { }
  ngOnInit()
  {
    this.x= this._stringservices.countcapital();
  }

}
