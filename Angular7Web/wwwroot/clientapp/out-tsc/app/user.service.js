var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
var UserService = /** @class */ (function () {
    //azureURL = 'https://bpsapp.azurewebsites.net/api/Function1?name=bps&code=W/waZPAt9u7NGoPLui8x7L5awqErj7CzSuxRjTTM/MWFg4p9eH2kNQ==';
    function UserService(http) {
        this.http = http;
        this.result = {};
        this.uri = 'http://localhost:8841/Api/user';
    }
    UserService.prototype.loginUser = function (user_email, user_password) {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        var obj = {
            user_email: user_email,
            user_password: user_password
        };
        //debugger;
        //this.http.post(`${this.uri}/Login`, {})
        //    .subscribe((data: any) => {
        //    this.result = data;
        //});   
    };
    UserService.prototype.getUserDetails = function () {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        console.log('get users!');
        return this.http.get(this.uri, httpOptions);
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map