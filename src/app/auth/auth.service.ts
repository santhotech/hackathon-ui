import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { User } from "../models/user";
import { ResponseError } from "../models/response-error";
import { environment } from "../../environments/environment";
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { AuthHttp,JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AuthService {

    constructor(private http: Http,private router: Router) { }
    private isUserLoggedin: boolean = false;
    jwtHelper: JwtHelper = new JwtHelper();
    private _authEvent = new BehaviorSubject<User>(this.getUser());

    authEvent$ = this._authEvent.asObservable();

    isTokenExpired(): boolean {
        if(this.getToken() && this.getToken()!="") {
            return this.jwtHelper.isTokenExpired(this.getToken());
        }
       return true;
    }

    redirectIfExpired() {
        if(this.isTokenExpired()) {
            this.router.navigate(['/auth/login']);
        }
    }

    isLoggedIn(): boolean {
        return !this.isTokenExpired();
    }
    
    login(requestPayload: any): Observable<User> {
        let results: Observable<User> = this.http.post(environment.api_url + "api-token-auth/", requestPayload).map((res: Response) => { 
            let body = res.json();
            if(body.token) {
                this.isUserLoggedin = true;
                localStorage.setItem('token',body.token);
                localStorage.setItem('currentUser',JSON.stringify(body.user));
                localStorage.setItem('currentCompany',JSON.stringify(body.company));
                this._authEvent.next(body.user);
            }
        }).catch((res: Response) => {
            let responseError: ResponseError;
            if(res.json().non_field_errors) {
                responseError = new ResponseError("Unable to authenticate","Please check the account information you entered.");                
            } else {
                responseError = new ResponseError("Unable to authenticate","The Server is experiencing some issues. Please try again later.");                
            }
            return Observable.throw(responseError);
        });
        return results
    };

    logout() {
        this.isUserLoggedin = false;
        localStorage.setItem('token',"");
        localStorage.setItem('currentUser',null);
        localStorage.setItem('currentCompany',null);
        this._authEvent.next(null);
    }

    getToken() {
        return localStorage.getItem('token');
    }
    
    getUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

}