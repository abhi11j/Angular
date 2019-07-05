import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

import { UserService } from './user.service';

@NgModule({
  declarations: [    
    AppComponent,LoginComponent, UsersComponent
  ],
  imports: [
      BrowserModule,      
      AppRoutingModule,
      FormsModule     
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
