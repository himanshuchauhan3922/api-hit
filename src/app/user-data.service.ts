import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getUserData(){
    return{
      name:"shiva",
      email:"3333@GMAIL.COM",
      mobile:448484949,
      
    }
  }
}
