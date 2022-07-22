import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private router: Router,
    private _activatedRoute:ActivatedRoute
    ) { }

  navigateToHome(){
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
  ngOnInit(): void {
  }

}
