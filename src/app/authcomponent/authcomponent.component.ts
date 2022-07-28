import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authcomponent',
  templateUrl: './authcomponent.component.html',
  styleUrls: ['./authcomponent.component.css']
})
export class AuthcomponentComponent implements OnInit {
  isLogin= false;
  constructor() { }

  ngOnInit(): void {
  }
  onSwitchMode(){
    this.isLogin = !this.isLogin
  }
  onFormSubmit(formdata:NgForm){
    const userData = formdata.value
  }

}
