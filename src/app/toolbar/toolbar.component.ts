import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    public login() {
        this.dialog.open(LoginComponent, {data: {name: 'Login!!'}});
    }
}
