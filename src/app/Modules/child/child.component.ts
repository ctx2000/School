import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() receiveMessage :string = "no message";

  @Output() sendFromChild = new EventEmitter<string>();


  sendmessageToParent(){
    this.sendFromChild.emit("this message is from child");
  }
}
