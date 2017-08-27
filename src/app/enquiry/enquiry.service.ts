import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { EnquiryGroup } from "../models/enquiry_group";
import { ResponseError } from "../models/response-error";
import { environment } from "../../environments/environment";
import { Subject, BehaviorSubject } from 'rxjs/Rx';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class EnquiryService {

    constructor(private http: Http) { }

    listEnquiryGroup(): Observable<EnquiryGroup[]> {
        return this.http.get(environment.api_url+"enquirygroup/").map(this.extractData).catch(this.handleError);
    }
    
    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    handleError(res: Response) {
        let error: ResponseError = res.json();
        return Observable.throw(error);
    }
    
}