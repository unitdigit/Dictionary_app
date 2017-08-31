import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';



@Injectable()
export class AuthService
 {

      constructor(public af: AngularFireAuth) { }
  

   
        loginWithGoogle()
        {
	        return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());	

        }
  
        loginWithfacebook()
		{
	        return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());	

        }
  
  
        loginwithemailandpassword(userInput, passInput)
        {
	       return this.af.auth.signInWithEmailAndPassword(userInput, passInput);
        }
  
        register(userInput, passInput)
        {
	       return this.af.auth.createUserWithEmailAndPassword(userInput, passInput); 
        }
    
	   logout()
	    {
	      return this.af.auth.signOut();
        }

}
