import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
interface BlogsResponse {
  results: any;
}
@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})

export class BlogAdminComponent implements OnInit {
results: any;
  blog: {};

  url: 'api/blogs';
       constructor(private http: HttpClient, private router: Router) { }
       ngOnInit(): void {
        // Make the HTTP request:
        this.http.get<BlogsResponse>('/api/blogs').subscribe(data => {
          // Read the result field from the JSON response.
           this.results = data;

        });
      }

  post(title, body) {
    const content = {title: title, body: body};

    this.http.post('api/blogs', content)
    .subscribe();
    // this.refresh();
     console.log(title, body);
     this.refresh();
  }
  deleteBlog(id) {
    this.http.delete('/api/blogs/' + id)
      .subscribe();
      this.refresh();
  }
  refresh(): void {
    window.location.reload();
}
  updateBlog(id, newTitle, newBody) {

this.http.put('api/blogs/' + id, {title: newTitle, body: newBody})
    .subscribe();
    this.refresh();
  }
}
