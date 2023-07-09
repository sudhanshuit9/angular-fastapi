import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-project';

  public getJsonValue: any;
  public postJsonValue: any;
  
  
  constructor (private http: HttpClient){

  }
  public getMethod(){
     this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
  }
}



