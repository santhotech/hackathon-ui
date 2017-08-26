import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquiryWizardComponent } from './enquiry-wizard/enquiry-wizard.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryRoutingModule {}
