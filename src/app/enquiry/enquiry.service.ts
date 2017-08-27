import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { EnquiryGroup } from "../models/enquiry_group";
import { ResponseError } from "../models/response-error";
import { environment } from "../../environments/environment";
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import {Guest} from '../models/guest';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class EnquiryService {

    constructor(private http: Http) { }
    private guestId: number = 0;
    listEnquiryGroup(): Observable<EnquiryGroup[]> {
        return this.http.get(environment.api_url+"enquirygroup/").map(this.extractData).catch(this.handleError);
    }

    sendGuestdata(guestObj):Observable<Guest>{
        if(this.guestId==0) {
            return this.http.post(environment.api_url+"guest/",guestObj).map(this.extractDataGuest).catch(this.handleError);
        } else {
            return this.http.put(environment.api_url+"guest/",guestObj).map(this.extractDataGuest).catch(this.handleError);
        }
    }

    addItems(itemObj):Observable<any>{
        return this.http.post(environment.api_url+"guestenquiry/",itemObj).map(this.extractData).catch(this.handleError);
    }

    extractDataGuest(res: Response) {
        let body = res.json();
        this.guestId = body.id;
        return body || {};
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