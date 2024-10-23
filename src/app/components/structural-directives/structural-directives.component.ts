import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StructuralDirectivesComponent  implements OnInit {

  isLoginIn = false;
  isProfileVisible = false;

  viewType: string = '';

  toggleLogin(){
    this.isLoginIn = !this.isLoginIn;
  }

  toggleProfile(){
    this.isProfileVisible = !this.isProfileVisible;
  }

  setView(view: string){
    this.viewType = view;
  }

  constructor() { }

  ngOnInit() {}

}
