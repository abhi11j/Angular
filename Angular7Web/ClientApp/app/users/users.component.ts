import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { debug } from 'util';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    result: any = {};

    title = 'User Details'

    constructor(private us: UserService) { }

    ngOnInit() {
        this.getUserDetails();
    }

    getUserDetails() {       
        this.us.getUserDetails().subscribe((data: any) => {
            this.result = data;
        });    
        
    }



}
