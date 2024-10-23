import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.page.html',
  styleUrls: ['./reactive-forms.page.scss'],
})
export class ReactiveFormsPage implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }

  onSubmit(){
    if(this.registrationForm.valid){
      console.log('Form Submitted:', this.registrationForm.value);
    }else{
      console.log("Form is invaild")
    }
  }


  get formControls(){
    return this.registrationForm.controls;
  }

  ngOnInit() {
  }

}
