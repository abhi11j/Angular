import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {   
    result: any = {}

    uri = 'http://localhost:8841/Api/user';

    //azureURL = 'https://bpsapp.azurewebsites.net/api/Function1?name=bps&code=W/waZPAt9u7NGoPLui8x7L5awqErj7CzSuxRjTTM/MWFg4p9eH2kNQ==';

    constructor(private http: HttpClient) { }

    loginUser(user_email, user_password) {      
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };

        const obj = {
            user_email: user_email,
            user_password: user_password
        };

        //debugger;

        //this.http.post(`${this.uri}/Login`, {})
        //    .subscribe((data: any) => {
        //    this.result = data;
        //});   
    }

    getUserDetails() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };

        console.log('get users!');        

        return this.http.get(this.uri, httpOptions);            
    }





     //return this
        //    .http
        //    .post(`${this.uri}/Login`, obj)
        //    .subscribe(res => console.log('done'));

}
