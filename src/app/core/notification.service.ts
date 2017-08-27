import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
//import { User } from "../models/user";
import { ResponseError } from "../models/response-error";
import { environment } from "../../environments/environment";
import { Subject, BehaviorSubject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class NotificationService {
    private _notificationEvent = new BehaviorSubject<any>(null);
    notificationEvent$ = this._notificationEvent.asObservable();

    broadcastNotification(message: any) {
        console.log(message);
        this._notificationEvent.next(message);
    }

    notifyUser(notifyType: string, notifyTitle: string, notifyDescription: string): void {
        console.log(notifyType);
        this.broadcastNotification({msg:{severity: notifyType, summary: notifyTitle, detail: notifyDescription}, sticky: false });
    }

    notifyUserWithSticky(notifyType: string, notifyTitle: string, notifyDescription: string): void {
        this.broadcastNotification({msg:{severity: notifyType, summary: notifyTitle, detail: notifyDescription}, sticky: true });
    }

    notifySuccess(msg: any) {
        console.log(msg);
        this.notifyUser("success",msg.msgTitle,msg.msgDetail);
    }
    notifyWarning(msg: any) {
        this.notifyUser("warning",msg.msgTitle,msg.msgDetail);
    }
    notifyError(msg: any) {
        this.notifyUser("error",msg.msgTitle,msg.msgDetail);
    }
    notifyInfo(msg: any) {
        this.notifyUser("info",msg.msgTitle,msg.msgDetail);
    }
}