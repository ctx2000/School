import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
messageFromParent: string = "Hello Child from Mommy";
showMessageFromChild : string = "No message from child";
receiveFromChild($event:string){
  this.showMessageFromChild = $event;
}
}
