import { Component } from '@angular/core';
import {UserDataService} from './user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[UserDataService]
})
export class AppComponent {
  title = 'angularPractice';
  name: string = "";

  constructor (private userdataservice:UserDataService){
    let userData=this.userdataservice.getUserData();
    // console.log(userData);
    this.name=userData.name
  }
}
