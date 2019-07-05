var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, us) {
        this.route = route;
        this.router = router;
        this.us = us;
        this.title = 'Welcome!';
        this.Users = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.Users = { user_email: 'bp@test.com' };
    };
    LoginComponent.prototype.loginUser = function (user_email, user_password) {
        console.log(user_email);
        console.log(user_password);
        this.us.loginUser(user_email, user_password);
        this.router.navigate(['user']);
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            UserService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map