import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = "sunshine";

  // Property Binding
  isButtonDisabled: boolean = true;

  // Event Binding
  updateUsername(){
    this.username = "Updated User - Luna";
    console.log(this.username)
  }

  name: string = '';

  submit(){
    console.log(this.name);

    localStorage.setItem('name', this.name);

    console.log("Name stored in local storage:", localStorage.getItem('name'));

    let namesList = JSON.parse(localStorage.getItem('names') || '[]');

    namesList.push(this.name);

    localStorage.setItem('names', JSON.stringify(namesList));

    const storedNames = localStorage.getItem('names');
    console.log("storedNames:",storedNames);

    const checkNull = storedNames ? JSON.parse(storedNames) : [];
    console.log(checkNull);

    console.log("List of names in local storage:", checkNull);
  }
  
  constructor() {
  }

}
