import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
login(email, password) {
  const user = { email: email, password: password }
  this.http.post('/auth/login', user);
}
}
