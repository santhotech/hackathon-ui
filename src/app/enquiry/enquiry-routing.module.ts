import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquiryWizardComponent } from './enquiry-wizard/enquiry-wizard.component';
import { EnquiryMainComponent } from './enquiry-main/enquiry-main.component';
import { EnquiryContactComponent } from './enquiry-contact/enquiry-contact.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Enquiry'
    },
    children: [
      {
        path: 'enquiry-wizard',
        component: EnquiryWizardComponent,
        data: {
          title: 'Enquiry Wizard'
        }
      },
      {
        path: 'enquiry-main',
        component: EnquiryMainComponent,
        data: {
          title: 'Enquiry Main'
        }
      },
      {
        path: 'enquiry-contact/:id',
        component: EnquiryContactComponent,
        data: {
          title: 'Enquiry Contact'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryRoutingModule {}
