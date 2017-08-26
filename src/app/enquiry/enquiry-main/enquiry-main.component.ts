import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuModule,MenuItem} from 'primeng/primeng';
import {DataGridModule} from 'primeng/primeng';
import {PackageOption} from '../../models/package_option';

@Component({
  templateUrl: 'enquiry-main.component.html',
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
export class EnquiryMainComponent implements OnInit {
 items: any[];
 subitems:PackageOption[];
 selectedObj:any={};
constructor( private router: Router) { }
  user: any = {};
  errors: any;
  showError: boolean = false;


handlePackage(obj) {
    this.subitems = obj.subitems;
}

showitems(obj){
    this.selectedObj = obj.package_option_name;
    alert(this.selectedObj);
}

ngOnInit(){
    this.items = [
                {label:'Call Open bar',
                subitems: [{
                    package_option_name : 'White Wine',
                    package_option_image: 'white_wine.png',                    
                },
                {
                    package_option_name : 'Red Wine',
                    package_option_image: 'red_wine.png',
                },
                {
                    package_option_name : 'Standard Beers',
                    package_option_image: 'white_wine.png',
                },
                 {
                    package_option_name : 'Liquor',
                    package_option_image: 'red_wine.png',
                }
                ]},
                {label:'Premium Open bar',
                subitems: [{
                    package_option_name : 'White Wine',
                    package_option_image: '',                    
                },
                {
                    package_option_name : 'Red Wine',
                    package_option_image: '',
                },
                {
                    package_option_name : 'Standard Beers',
                    package_option_image: '',
                },
                 {
                    package_option_name : 'Liquor',
                    package_option_image: '',
                }
                ]},

                {label:'Top Shelf Open bar',
                subitems:[{
                    package_option_name : 'White Wine',
                    package_option_image: '',                    
                },
                {
                    package_option_name : 'Red Wine',
                    package_option_image: '',
                },
                {
                    package_option_name : 'Standard Beers',
                    package_option_image: '',
                },
                 {
                    package_option_name : 'Liquor',
                    package_option_image: '',
                }]}

            ]  
          
      
}

}
