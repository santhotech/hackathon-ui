import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

import { EnquiryWizardComponent } from './enquiry-wizard/enquiry-wizard.component';
import { EnquiryRoutingModule } from './enquiry-routing.module';

@NgModule({
  imports: [ EnquiryRoutingModule,FormsModule,CommonModule ],
  declarations: [
    EnquiryWizardComponent
  ]
})
export class EnquiryModule { }
