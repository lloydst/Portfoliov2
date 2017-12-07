import { Component } from '@angular/core';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent {
internships = [
  {
    company: 'Poort80',
    website: 'poort80.nl',
    duration: '19-7-2017 - 19-12-2017',
    description: 'Poort80 is a webdevelopment company based in the netherlands. '
    + '<br> They use the mean stack (mongodb, express, angular, nodejs). as well as other languages'
    + '<h1>to do more text.</h1>'
  }
  // {
  //   company: '',
  //   website: '',
  //   duration: ' date tot date'
  // }
];
  constructor() {
    // global vars to be reused in functions
   }



}
