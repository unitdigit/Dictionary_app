import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../providers/auth.service';
declare var $: any;
@Component({

    selector: 'userdetail',			
    templateUrl: './login.component.html'


           })



export class loginDetail implements OnInit 
{

    Vmessage: boolean = true;
    alertsate: boolean;
    message: string;
	mySentences: mySentences[];
	
		
   

    constructor(public authService: AuthService, public router: Router) {
		console.log('router start...');
    }
	
	 ngOnInit()
	{
		this.message = '';
		this.mySentences = [{
				username: 'gaurav',
				pass: 'Sentence1'
			},
			{
				username: 'saurav',
				pass: 'Sentence2'
			},

		];
	}
	
     Googlelogin()
    {
		
	    this.authService.loginWithGoogle().then((data) => {
         this.router.navigate(['./about']);
	         })
			 
     }
	  
	   Facebooklogin()
    {
		
	    this.authService.loginWithfacebook().then((data) => {
         this.router.navigate(['./about']);
	         })
			 
      }
	  
	  login(userInput, passInput)
	  {
		  
		  
		  try 
		  
		  {
			  
			  this.alertsate = false;
		      this.Vmessage = false;
	 
	          this.message = 'Account Does not Exits';
		      const result = this.authService.loginwithemailandpassword(userInput, passInput).then((data) =>{
							
			  this.router.navigate(['/about']);
			
		         })
		
		  }
		  
		  
		  catch(e)
		  {
			  this.alertsate = false;
		   this.Vmessage = false;
		   this.message = 'Account Does not Exits';
			  console.error(e);
		  }
		
	  }
	  
       register() 
	   {
			
		this.router.navigate(['/registerpage']);
	   }
	
	
			/**userExists(userInput: string, passInput: string) {
			
			
		
        this.Vmessage = false;

        for (var i = 0; i < this.mySentences.length; i++) {
            if (userInput === this.mySentences[i].username && passInput === this.mySentences[i].pass) {
                this.alertsate = true;

                console.log(this.alertsate);
                this.message = 'Account Exits';
                this.router.navigate(['./about']);
                break;
            } else {
                this.alertsate = false;
                console.log(userInput + passInput);
                this.message = 'Account Does not Exits';
            }
        }**/


}



export interface mySentences 
{
    username: string;
    pass: string;
}