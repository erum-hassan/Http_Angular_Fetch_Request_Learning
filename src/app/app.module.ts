import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NevigationComponent } from './nevigation/nevigation.component';
import { HomeComponent } from './home/home.component';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    NevigationComponent,
    HomeComponent,
    AuthcomponentComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
