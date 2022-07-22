import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formBuilder: any;

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['home'])
  }

  navigateToShowEmployees() {
    this.router.navigate(['show-employees'])
  }
  navigateToContact() {
    this.router.navigateByUrl('/contact')
  }
  navigateToNews() {
    this.router.navigateByUrl('/news')
  }
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //Form Validables 
  registerForm: any = FormGroup;
  submitted = false;

  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      alert("Success!!");
    }

  }
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      employeeId: ['', [Validators.required]],
      employeeName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      dob: ['', [Validators.required]]
    });
  }
}