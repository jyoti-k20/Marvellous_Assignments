import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
  public a : number=10;
  public b : number=11;

  addition()
  {
    return this.a+this.b ;
  }

  substraction()
  {
    return this.a-this.b ;
  }
}
