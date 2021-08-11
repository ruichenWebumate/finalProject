import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo: string;

  constructor(
    private sampleService: SampleService
  ) { }

  ngOnInit() {
    this.loginInfo = 'initialized';
    this.sampleService.loginInfo.subscribe(data => {
      this.loginInfo = data;
    });
  }

  login() {
    this.sampleService.loginSampleService(null);
  }

}
