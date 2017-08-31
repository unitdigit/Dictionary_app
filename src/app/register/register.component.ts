import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../providers/auth.service';
declare var $: any;
@Component({

    selector: 'registerpage',			
    templateUrl: './register.component.html'


          })



export class register implements OnInit 
{

    Vmessage: boolean = true;
    alertsate: boolean;
	inputmail:boolean;
    message: string;
	
	

          constructor(public authService: AuthService, public router: Router) 
		  {
		   console.log('router start...');
          }
	
	     ngOnInit()
	      {
		  this.message = '';
		  this.inputmail=true;
		  this.alertsate = false;
	      }
	
	  
          registeruser(userInput: string, passInput: string) 
		  {
			  
			
			  try
			  {	
                
	              this.alertsate = true;
				  this.Vmessage = false;
			      this.message = 'Account has been created successfully.';
			    const result = this.authService.register(userInput, passInput);
			    console.log(result);
			
			  }
			
			  catch(e)
				{
				console.error(e);
			    }
		
		
           }

	


}



