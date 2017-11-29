import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
interface BlogsResponse {
  results: any;
}
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})

export class BlogsComponent implements OnInit {

  results: any;

url: 'api/blogs';
     constructor(private http: HttpClient) { }
     ngOnInit(): void {
      // Make the HTTP request:
      this.http.get<BlogsResponse>('/api/blogs').subscribe(data => {
        // Read the result field from the JSON response.
         this.results = data;

      });
    }

  }
