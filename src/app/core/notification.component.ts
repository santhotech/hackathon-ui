import { Component, Input, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';

import { Subscription } from 'rxjs/Subscription';

import { NotificationService } from './notification.service';

@Component({
    selector: 'user-notification',
    template: `<p-growl [(value)]="msgs" [life]="life"></p-growl>`,
})

export class NotificationComponent implements OnInit {
    msgs: Message[] = [];
    sticky: boolean = false;
    life: number = 5000;
    constructor(private notificationService: NotificationService) {

    }

    ngOnInit(): void {
        this.notificationService.notificationEvent$.subscribe((info)=> {
            console.log(info);
            if(info) {
                this.sticky = info.sticky;
                this.msgs = [...this.msgs,info.msg];
            }
        })
    }

    ngOnDestroy() {
        
    }
} 