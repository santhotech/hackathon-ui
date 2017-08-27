import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 import { User } from '../models/user';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
 currentUser: User;
  constructor( private authService: AuthService,private router: Router) { }

  public toggled(open:boolean):void {
  }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  logout() {
    //this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  ngOnInit(): void {
    this.authService.authEvent$.subscribe((user) => {
      console.log(user);
      if(user) {
        this.currentUser = user;
      }
   })
  }
}
