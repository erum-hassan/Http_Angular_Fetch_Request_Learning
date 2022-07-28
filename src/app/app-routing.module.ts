import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"auth",component:AuthcomponentComponent},
  {path:"post",component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
