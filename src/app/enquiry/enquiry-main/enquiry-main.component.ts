import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {MenuModule,MenuItem} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {PackageOption} from '../../models/package_option';
import {OptionPrimary} from '../../models/option_primary';
import {EnquiryGroup} from '../../models/enquiry_group';
import {Guest} from '../../models/guest';
import {PickListModule} from 'primeng/primeng';
import {EnquiryService} from '../enquiry.service';

@Component({
  templateUrl: 'enquiry-main.component.html',  
  providers: [EnquiryService],
  selector: "enquiry-main",
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
export class EnquiryMainComponent {

//  @Input()
//  enquiryGroup: EnquiryGroup;
 
 private _enqGroup: EnquiryGroup;
 packageOptions: PackageOption[];
 primaryOptions: OptionPrimary[];
 @Input()
  set enquiryGroup(enquiryGroup: EnquiryGroup) {
    console.log('got name: ', enquiryGroup);
    this._enqGroup = enquiryGroup;

  }
 items: any[];
 subitems:PackageOption[];
 selectedObj:any={};
 showRadio:boolean;
 selectedTypes: string[];
 cnt:number=0;
 disabled:boolean=false;
 selectedItems:OptionPrimary[];
 guestObj:Guest;

constructor( private router: Router,private enquiryService : EnquiryService) { }
  user: any = {};
  errors: any;
  showError: boolean = false;

selectedPackageOption: string;
selectedPackageGroup: String;
handlePackage(obj) {
    this.selectedPackageGroup = obj.group_package_name;
    this.packageOptions = obj.groupPackageOptions;
}

showitems(obj){
    this.selectedPackageOption = obj.package_option_name;
   this.primaryOptions = obj.optionPrimaries;
}

sendGuestData(){
    let guestObj:any ={};
    guestObj.guest_first_name = Math.random().toString(36).slice(2);
    guestObj.guest_last_name = Math.random().toString(36).slice(2);
  this.enquiryService.sendGuestdata(guestObj).subscribe(data=>{
      this.guestObj = data;
      
  })
}

addItem(event,obj){   
    if(event.target.checked==true){
        let itemObj:any ={};
         itemObj.guest=this.guestObj.id;
        itemObj.primary_option= obj.id;
        this.enquiryService.addItems(itemObj).subscribe(data=>{
       console.log(data);
    });
    }
   
    
}

ngOnInit(){    
      this.sendGuestData();
}

}
