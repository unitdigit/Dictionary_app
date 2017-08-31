import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserInfo } from './userinfo/userinfo.component';
import { loginDetail } from './login/login.component';
import { register } from './register/register.component';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';


import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './providers/auth.service';




export const firebaseConfig = {
	
	apiKey: "AIzaSyD-zPPuMTQ2klAhVuwmqIjnnUpUvehgi3M",
    authDomain: "my-signin-app-1bb3b.firebaseapp.com",
    databaseURL: "https://my-signin-app-1bb3b.firebaseio.com",
    projectId: "my-signin-app-1bb3b",
    storageBucket: "my-signin-app-1bb3b.appspot.com",
    messagingSenderId: "93396088408"

	
}





@NgModule({
  declarations: [AppComponent, loginDetail, UserInfo, register],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routing), AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
