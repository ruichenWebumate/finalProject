import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  url = 'http://3.26.18.55/php/login.php';
  loginInfo = new BehaviorSubject<string>('from sample service');

  constructor(
    private http: HttpClient,
  ) { }

  loginSampleService(data) {
    this.http.post<any>(this.url, data, httpOptions).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
