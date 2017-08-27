import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EnquiryGroup} from '../../models/enquiry_group';
import { Http, Response } from "@angular/http";
import {EnquiryService} from '../enquiry.service';
import {DataGridModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';


@Component({
  templateUrl: 'enquiry-wizard.component.html',
  providers: [EnquiryService],
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
export class EnquiryWizardComponent implements OnInit {
    items:EnquiryGroup[];
    selectedEnquiryGroup:EnquiryGroup;
constructor( private router: Router,private http: Http,private enquiryService : EnquiryService) { }
  errors: any;
  showError: boolean = false;
  
listEnquiryGroup(){
  this.enquiryService.listEnquiryGroup().subscribe(data=>{
     this.items = data;
     console.log(this.items);
  })
}

selectEnquiryGroup(obj){    
  this.selectedEnquiryGroup = obj;
}

ngOnInit(){
  this.listEnquiryGroup();

}

}
