import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { NotificationService } from './notification.service';
import { GrowlModule } from 'primeng/primeng';
import { NotificationComponent } from './notification.component';
import { DynamicElementComponent } from './dynamic-form/dynamic-element.component';

@NgModule({
  imports: [CommonModule,HttpModule,GrowlModule,FormsModule,ReactiveFormsModule],
  exports: [CommonModule,NotificationComponent,DynamicElementComponent],
  declarations:[NotificationComponent,DynamicElementComponent],
  providers: [AuthGuard]
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AuthService,NotificationService]
    };
  }
}
