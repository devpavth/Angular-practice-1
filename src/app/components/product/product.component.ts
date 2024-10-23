import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true
})
export class ProductComponent  implements OnInit {

  @Input() product: any;
  @Input() event: any;
  @Output() studentSelect =  new EventEmitter<any>();
  @Output() productClicked = new EventEmitter<any>();


  student = {
    name: "Savitha",
    department: "BBA",
    amount: 20000,
  }

  selectStudent(){
    this.studentSelect.emit(this.student)
  }

  handleEvent(){
    this.productClicked.emit(this.event);
  }


  constructor() { }

  ngOnInit() {}

}
