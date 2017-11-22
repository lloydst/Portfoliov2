import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';

interface BlogsResponse {
  blog: any;
}

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog: {};
  url: 'api/blogs';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.getBlogDetail(this.route.snapshot.params['id']);
  }
  getBlogDetail(id) {
    this.http.get('/api/blogs/' + id).subscribe(data => {
      this.blog = data;
    });
  }
}








