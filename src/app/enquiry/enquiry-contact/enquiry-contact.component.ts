import { Component,OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {EnquiryGroup} from '../../models/enquiry_group';
import { Http, Response } from "@angular/http";
import {EnquiryService} from '../enquiry.service';
import {DataGridModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';


@Component({
  templateUrl: 'enquiry-contact.component.html',
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
export class EnquiryContactComponent implements OnInit {
private _enqGroup: EnquiryGroup;
    contact: any = {};
    items:EnquiryGroup[];
    selectedEnquiryGroup:EnquiryGroup;
constructor( private route: ActivatedRoute,private router: Router,private http: Http,private enquiryService : EnquiryService) { }
  errors: any;
  showError: boolean = false;
  showForm: boolean = true;
  finish(){
    this.enquiryService.updateGuestdata(this.contact,this.id).subscribe(data=>{
      this.showForm = false;
      
  })
  }
 id: number;
  private sub: any;
ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
}

}
