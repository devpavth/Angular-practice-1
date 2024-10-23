import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  onSubmit(form: any){
    if(form.valid && this.user.password === this.user.confirmPassword){
      console.log("Form submitted:", form);
      console.log("Form data:", this.user);

      let userList = JSON.parse(localStorage.getItem('registration form') || '[]')

      if(Array.isArray(userList)){
        userList.push(this.user);
      }else{
        userList = [this.user];
      }


      localStorage.setItem('registration form', JSON.stringify(userList));

      const storedUser = localStorage.getItem('registration form')

      if(storedUser){
        const user = JSON.parse(storedUser);

        console.log('Received user data:', user);
      }

    }else{
      console.log('Form is invalid or passwords do not match.');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
