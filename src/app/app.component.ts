import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>',
	
	
})

export class AppComponent
{
	private isLoggedIn: Boolean;
    private user_displayName: String;
	private user_email: String;
	
	
	constructor(public authService: AuthService, public router: Router) {
		
    }
	
}