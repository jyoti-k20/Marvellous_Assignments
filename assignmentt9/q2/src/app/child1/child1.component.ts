import { Component,OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
 public y : boolean = false ;

 constructor(private _numberservice : NumberService)
{}
ngOnInit()
{
 this.y=this._numberservice.ChkPrime(10);
}

}
