import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  addUser(name, email, password, confirmPassword) {
    const user = { email: email, name: name, password: password, confirmPassword: confirmPassword}
    this.http.post('/auth/register', user);
  }
}

