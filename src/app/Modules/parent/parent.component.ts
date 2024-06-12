import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { HttpService } from '../../_Core/Service/http.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  messageFromParent: string = "Hello Child from Mommy";
  showMessageFromChild: string = "No message from child";

  serviceMessage?: string;

  constructor(private httpService: HttpService) {
  }
  ngOnInit(){
  }
  onClickService(){
    this.messageFromParent = this.httpService.tryService();
  }
  receiveFromChild($event: string) {
    this.showMessageFromChild = $event;
  }
}
