import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formBuilder: FormBuilder = new FormBuilder;
  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];


  constructor(private empService : EmployeeService, private router: Router,
    private _activatedRoute:ActivatedRoute) { }

  navigateToHome(){
    this.router.navigate(['home'])
  }

  navigateToShowEmployees() {
    this.router.navigate(['/show-employees'])
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
registerForm:any = FormGroup;
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
  if(this.submitted)
  {
    alert("Success!!");
  }
 
}
  ngOnInit() {

    
    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      gender : [''],
      salary: [''],
      date: ['']
    });

    //Add User form validations
    this.registerForm = this.formBuilder.group({
    employeeId: ['', [Validators.required]],
    employeeName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    salary: ['', [Validators.required]],
    dob: ['',[Validators.required]]
    });
  }

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.gender = this.empDetail.value.gender;
    this.empObj.salary = this.empDetail.value.salary;
    this.empObj.date = this.empDetail.value.date;

    this.empService.addEmployee(this.empObj).subscribe(res=>{
        console.log(res);
        this.getAllEmployee();
    },err=>{
        console.log(err);
    });

  }
  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
        this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

}
