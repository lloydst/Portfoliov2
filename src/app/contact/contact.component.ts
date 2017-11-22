import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  info = {
    name : {
      firstName: 'Lloyd',
      lastName: 'Stumpel'
    },
    email: 'lloyd.stumpel@gmail.com',
    mobile: '+31620917451'

  };
  constructor() { }

  ngOnInit() {
  }

}
