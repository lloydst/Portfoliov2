import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { InternshipsComponent } from './internships/internships.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {path: '' , component: AboutMeComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'about', component: AboutMeComponent },
  {path: 'internship', component: InternshipsComponent },
  {path: 'blogs', component: BlogsComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'blog-admin', component: BlogAdminComponent },
  {path: 'blog-detail/:id', component: BlogDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
