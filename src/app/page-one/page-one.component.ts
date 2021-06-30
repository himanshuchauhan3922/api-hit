import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  apiUrl='http://jsonplaceholder.typicode.com/users';
apiData: any;
  parentComponent(data: any)
  {
console.warn(data)
  }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe((data)=>{
      console.warn(data)
      this.apiData=data;
    })
  }
  }



  