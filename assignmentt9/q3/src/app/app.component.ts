import { Component,OnInit } from '@angular/core';
import { NumberService } from './number.service';
import { StringService } from './string.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public y : boolean = false;
  public x :number= 0;

  constructor(private _numberservice : NumberService , private _stringservice : StringService)
  {}
 ngOnInit()
 {
  this.y = this._numberservice.ChkPrime(3);
  this.x = this._stringservice.countcapital();
 }

}
