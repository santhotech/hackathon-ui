import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'login.component.html',
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
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }
  user: any = {};
  errors: any;
  showError: boolean = false;
  login() {
    this.authService.login(this.user).subscribe(currentUser => {
      this.router.navigate(['/dashboard']);
    }, error => {
      this.errors = error;
      this.showError = true;
    })
  }

}
