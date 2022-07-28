import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError,map } from 'rxjs';
import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  url="https://complete-ht-default-rtdb.asia-southeast1.firebasedatabase.app/post.json"
  constructor(private http:HttpClient) { }

  createPost(userdata:Post)
  {
    return this.http.post<Post>(this.url,userdata).pipe(catchError(this.getHandleError))
  }
  fetchPost(){
    return this.http.get<Post>(this.url).
    pipe(
      map((response)=>{
     let posts:Post[] = []
     for(let key in response){
      posts.push({...response[key],key})
     }
     return posts;
    }),catchError(this.getHandleError))
  }


  getHandleError(errors:HttpErrorResponse){
    let error= "errors.error.message"
    return throwError(error)
  }

}
