import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
public str  ="HellO"
public chars=[...this.str]
public count=0;

countcapital(){
  
  this.chars.forEach((val)=>{
    if(val>="A" && val <="Z"){
      this.count++;
    }
  })
  return this.count
}
}