import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 posts:Post[]=[]
 error:string =""
  constructor(private postService: PostserviceService) { 
    
  }

  ngOnInit(): void {
     this.OnFetchPost()
  }
  onpostsubmit(postdata: NgForm) {
    let postData: Post = postdata.value
    this.OncreatePost(postData);
   


  }

  OncreatePost(postdata: Post) {
    this.postService.createPost(postdata).subscribe((response) => {
      this.OnFetchPost()
    }, (error) => {
      console.log(error)
    })
  }
  OnFetchPost(){
   this.postService.fetchPost()
   .subscribe((response)=>{this.posts = response},(error)=>{error = this.error})
  }



}
