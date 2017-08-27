import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuModule,MenuItem} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {PackageOption} from '../../models/package_option';
import {OptionPrimary} from '../../models/option_primary';
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


handlePackage(obj) {
    this.subitems = obj.subitems;
    this.selectedObj =null;    
}

showitems(obj){
    this.selectedObj = obj;  
    this.selectedItems=[]; 
    if(this.selectedObj.selection_allowed==1){
        this.showRadio = true;
    }else{
        this.showRadio = false;
    }
}

limitCheckbox(){    
    this.cnt++;   
   if(this.cnt > this.selectedObj.selection_allowed){
        this.disabled= true;               
    }else{
        this.disabled = false;
       
    }


}

ngOnInit(){    
    this.selectedObj = null;
    // this.items = [
    //             {label:'Call Open bar',
    //             subitems: [{
    //                 id: 1,
    //                 package_option_name : 'White Wine',
    //                 package_option_image: 'white_wine.png',
    //                 selection_allowed:1,
                   
    //                 inner_items:[
    //                     {   
    //                         id:1,
    //                         option_primary_name:'Banfi San'
    //                     },
    //                      {  
    //                         id:2,
    //                         option_primary_name:'Angelo Pinot'
    //                     },
    //                      {
    //                         id:3,
    //                         option_primary_name:'Grigio'
    //                     },
    //                      {
    //                         id:4,
    //                         option_primary_name:'Federalist Chardonnay'
    //                     },
    //                     ] 

    //             },
    //             {   
    //                 id:2,
    //                 package_option_name : 'Red Wine',
    //                 package_option_image: 'red_wine.png',
    //                 selection_allowed:1,
    //                 inner_items:[]
    //             },
    //             {
    //                  id:3,
    //                 package_option_name : 'Standard Beers',
    //                 package_option_image: 'white_wine.png',
    //                 selection_allowed:2,
    //                 inner_items:[
    //                     {
    //                         id:1,
    //                         option_primary_name:'Bud Light'
    //                      },
    //                      {
    //                         id:2,
    //                         option_primary_name:'Budweiser'
    //                      },
    //                      {
    //                         id:3,
    //                         option_primary_name:'Yeungling'
    //                      },
    //                      {
    //                         id:4,
    //                         option_primary_name:'Corona'
    //                      },
    //                 ]
    //             },
    //              {
    //                 id:4,
    //                 package_option_name : 'Liquor',
    //                 package_option_image: 'red_wine.png',
    //                 selection_allowed:2,
    //                 inner_items:[]
    //             }
    //             ]},
    //             {label:'Premium Open bar',
    //             subitems: [{
    //                 id: 2,
    //                 package_option_name : 'White Wine',
    //                 package_option_image: '',  
    //                 inner_items:[]                  
    //             },
    //             {
    //                 package_option_name : 'Red Wine',
    //                 package_option_image: '',
    //                 inner_items:[]
    //             },
    //             {
    //                 package_option_name : 'Standard Beers',
    //                 package_option_image: '',
    //                 inner_items:[]
    //             },
    //              {
    //                 package_option_name : 'Liquor',
    //                 package_option_image: '',
    //                 inner_items:[]
    //             }
    //             ]},

    //             {label:'Top Shelf Open bar',
    //             subitems:[{
    //                 id: 3,
    //                 package_option_name : 'White Wine',
    //                 package_option_image: '',  
    //                 inner_items:[]                  
    //             },
    //             {
    //                 package_option_name : 'Red Wine',
    //                 package_option_image: '',
    //                 inner_items:[]
    //             },
    //             {
    //                 package_option_name : 'Standard Beers',
    //                 package_option_image: '',
    //                 inner_items:[]
    //             },
    //              {
    //                 package_option_name : 'Liquor',
    //                 package_option_image: '',
    //                 inner_items:[]
    //             }]}

    //         ]  
          
      
}

}
