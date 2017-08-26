import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { AuthGuard } from './auth/auth.guard';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent }  from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/enquiry/enquiry-wizard',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    data: {
      title: 'Auth'
    },
    children: [
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule',
      }
    ]
  },
  {
    path: 'enquiry',
    component: SimpleLayoutComponent,
    data: {
      title: 'Enquiry'
    },
    children: [
      {
        path: '',
        loadChildren: './enquiry/enquiry.module#EnquiryModule',
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
