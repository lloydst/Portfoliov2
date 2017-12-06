import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InternshipsComponent } from './internships/internships.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { TruncatePipe } from './custom-pipes/limit-to.pipe';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    BlogAdminComponent,
    BlogDetailComponent,
    BlogsComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    InternshipsComponent,
    NavBarComponent,
    ProjectsComponent,
    TruncatePipe,
    RegisterComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
    ],
  providers: [

],
  bootstrap: [AppComponent]
})
export class AppModule { }
