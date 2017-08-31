import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../providers/auth.service';


declare var $: any;

@Component({
	selector:'about',
	templateUrl: './userinfo.component.html',
	
	
	
})

export class UserInfo implements OnInit
{

  mymeaning: string;
  wordntfound: string;
  mysynonyms: string[];
  notfound:boolean;
  foundWrd: boolean;
  mydata: mydata[];
  
   
 
  
	constructor(public authService: AuthService, public router: Router)
	{
		
	}
	
	 
	
	ngOnInit() {
		
		this.mymeaning = '';
		  this.foundWrd = false;
		
		       this.mydata =  [
			   {
				   word: 'pretty',	
				   meaning: 'attractive in a delicate way without being truly beautiful.', 
			       synonyms:["attractive", "lovely", "good-looking", "nice-looking", "fetching", "prepossessing", "appealing", "charming", "delightful", "nice", "engaging", "pleasing"]
			   },
		      {
				   word: 'good',	
				   meaning: 'to be desired or approved of', 
			       synonyms:["fine", "of high quality", "of a high standard", "quality", "superior"]
			   },
			   {
				   word: 'bad',	
				   meaning: 'of poor quality or a low standard.', 
			       synonyms:["substandard", "poor", "inferior", "second-rate", "second-class", "unsatisfactory", "inadequate", "unacceptable", 
				   "not up to scratch", "not up to par", "deficient", "imperfect", "defective", "faulty", "shoddy", "amateurish", "careless", "negligent"]
			   }
			   ];
		
		
		}
		logout()
    {
		
	    this.authService.logout().then((data) => {
         this.router.navigate(['']);
	         })
			 
      }
	  
	  wordDictionary(search: string)
	  {
		  
		  console.log(this.mydata.length);
		 
		  if(search)
		  {
			  
		  for(var i =0; i < this.mydata.length; i++)
		  {
			  
			 
			  if (this.mydata[i].word === search)
			  {
				  console.log("match");
				  this.foundWrd= true;
				  this.notfound = false;
                 
				 this.mymeaning = this.mydata[i].meaning;
				 
				this.mysynonyms =  this.mydata[i].synonyms;
				break;
			  }
			  
			  else
			  {
				  console.log("notmatch");
				 this.notfound = true;
				 this.foundWrd= false;
				 this.wordntfound = "Word is not Found";
			  }  
		  }
	   }
	    
		else
			
		{    console.log("blank");  
		this.notfound = true;
				 this.foundWrd= false;
			this.wordntfound = "Enter the Searching word";
		}	
			
		  
		  
	  }
	  
		
		
	}


	


	export interface mydata {
    word: string;
    meaning: string;
	synonyms:string[];
	
} 

	
