import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor() { }

    loginUser(user_email, user_password) {
        const obj = {
            user_email: user_email,
            user_password: user_password
        };

    }
}
