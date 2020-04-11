import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css']
})
export class AComponentComponent implements OnInit {
 @Input() myMassage:string;
 constructor() { }


  ngOnInit() {
    this.myMassage ="its messge from A component"
  }

}
