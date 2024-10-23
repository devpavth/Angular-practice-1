import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  eventDetails: any;

  selectedStudent: any;

  selectedProduct = {
    name: "Laptop",
    price: 1000,
    description: "A high performance laptop"
  };


  onStudentSelect(student: any){
    this.selectedStudent = student;
  }
  
  eventData = {
    name: "Shanmathi",
    price: 5000
  }

  handleEventData(event: any){
    this.eventDetails = event;
  }

  constructor() { }

  ngOnInit() {
  }

}
