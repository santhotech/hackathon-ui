import {OptionPrimary} from './option_primary';
export class PackageOption{
    id:number;
    package_option_name:string;
    package_option_description :string;
    package_option_cost :number;
    package_option_image:string;
    selection_allowed:number;
    optionPrimaries:OptionPrimary[];
}