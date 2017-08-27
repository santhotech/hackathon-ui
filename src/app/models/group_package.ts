import {PackageOption} from './package_option';
export class GroupPackage{
    id:number;
    group_package_name:string;
    group_package_description:string;
    group_package_cost:number;
    is_package_only:number;
    groupPackageOptions:PackageOption[];
    

}