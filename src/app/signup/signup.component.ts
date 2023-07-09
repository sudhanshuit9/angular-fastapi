import { Component } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of,Subject} from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
  constructor(
    private _http:HttpClient
  ){}

  doRegistration(){
    console.log('form submitted');
    
  }
}
