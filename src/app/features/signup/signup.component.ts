import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  submitedd: boolean = false;
  myForm: FormGroup;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
      confirmepassword: new FormControl(''),
    });
  }
  get f() {
    return this.myForm.controls;
  }
  onsubmited() {
    this.submitedd = true;
    console.log(this.myForm.valid);
  }
  onclick() {
    alert(JSON.stringify(this.myForm.value));
  }

  /* nospace(data: String) {
    var myArray = data.split('');
    //console.log(myArray);
    var newStr: string;

    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] != '') {
        newStr += myArray[i];  }}
    console.log('new string after trim', newStr);
  }*/
}
