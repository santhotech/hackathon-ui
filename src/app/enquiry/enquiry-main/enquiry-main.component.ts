import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {MenuModule,MenuItem} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {PackageOption} from '../../models/package_option';
import {OptionPrimary} from '../../models/option_primary';
import {EnquiryGroup} from '../../models/enquiry_group';

import {PickListModule} from 'primeng/primeng';


@Component({
  templateUrl: 'enquiry-main.component.html',  
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
constructor( private router: Router) { }
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


ngOnInit(){    
      
}

}
