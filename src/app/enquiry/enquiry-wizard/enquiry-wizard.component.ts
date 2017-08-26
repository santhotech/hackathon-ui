import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'enquiry-wizard.component.html',
  styles: [`
    .app { 
      background: #687d68 no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  `]
})
export class EnquiryWizardComponent {

  constructor( private router: Router) { }
  user: any = {};
  errors: any;
  showError: boolean = false;
  

}
