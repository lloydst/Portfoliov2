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
    duration: '19-7-2017 tot 19-12-2017'
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
