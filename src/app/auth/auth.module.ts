import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [ AuthRoutingModule,FormsModule,CommonModule ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
