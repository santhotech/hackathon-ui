import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import {MenuModule,MenuItem} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {PickListModule} from 'primeng/primeng';


import { EnquiryWizardComponent } from './enquiry-wizard/enquiry-wizard.component';
import { EnquiryMainComponent } from './enquiry-main/enquiry-main.component';
import { EnquiryRoutingModule } from './enquiry-routing.module';

@NgModule({
  imports: [ EnquiryRoutingModule,
  FormsModule,
  CommonModule,
  MenuModule,
  DataGridModule,
  DataListModule,
  PickListModule
 ],
  declarations: [
    EnquiryWizardComponent,
    EnquiryMainComponent
  ]
})
export class EnquiryModule { }
