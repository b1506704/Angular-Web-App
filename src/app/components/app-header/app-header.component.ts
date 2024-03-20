import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
    public fullName = 'Dev User';
    public isLogoutDisabled = false;

    constructor() { }

    ngOnInit() {
    }

    public logout() {
        console.log('logout');
        this.isLogoutDisabled = !this.isLogoutDisabled;
    }

}
