import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() public datafromp =""
@Output() public Myevet = new EventEmitter();

public Sendmessage()
{
  this.Myevet.emit("Hello Child component");
}

}
