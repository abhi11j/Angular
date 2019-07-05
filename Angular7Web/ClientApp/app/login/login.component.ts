import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = 'Welcome!'

    Users: any = {};

    constructor(private route: ActivatedRoute,
        private router: Router,
        private us: UserService) { }

    ngOnInit() {
        this.Users = { user_email: 'bp@test.com' };
    }

    loginUser(user_email, user_password) {
        console.log(user_email);
        console.log(user_password);

        this.us.loginUser(user_email, user_password);
        this.router.navigate(['user'])
    }

}
