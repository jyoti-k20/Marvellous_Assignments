import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public a :number=2


ChkPrime( a :number)
{
var count:number=0
for (var b :number=2 ; b <= a/2 ; b++)
{
 
   if(a%b == 0)
  {
       count++
       break;
  }
}
if (count==0)
 {
      // console.log(a, ": is prime number")
      return true;
 }
else
{
    // console.log(a, ": is not prime number")
   return false;
 }


}
}
