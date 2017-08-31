import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { loginDetail } from './login/login.component';
import { UserInfo } from './userinfo/userinfo.component';
import { Component } from '@angular/core';
import { register } from './register/register.component';




export const routing: Routes = [
    
    { 
	path: '', 
	component: loginDetail 
	},
   
{ 
	path: 'about', 
	component: UserInfo 
	},
	
	{ 
	path: 'registerpage', 
	component: register 
	}
   ];

