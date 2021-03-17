import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BakendService } from '../service/backend.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup
resData;
Tiles;
Msg;
Error:Boolean=false;
log:boolean =true
title="Dashback Online Demat Account Login"
loginD:boolean=false;
forgotD:boolean=false;
changeD:boolean=false;
  constructor(private bs: BakendService, private fb: FormBuilder, private router: Router, private tss:Title, private meta:Meta) {   }

  ngOnInit() {
    this.loginD=true;
    this.loginForm();
    this.tss.setTitle(this.title);
    this.meta.addTags([
      {name:'keywords',content:'Open demat account, open free demat account, open online demat account, online demat account at lowest brokerage charges, free demat and trading account, zero brokerage demat account, demat account login  '},
      {name:'description',content:'Get your Lowest Stock Brokerage Demat Account Today! Start Trading with Dash Back. Open your Demat & Trading Account with zero account opening fees now and login to trade faster and smarter.'},
      {name:'robot',content:'index,follow'}
    ]);
  }
  loginForm(){
    this.login = this.fb.group({
      'mobile' : ['',Validators.required],
      'password' :['',Validators.required]
    })
  }
  loginf(){
    var formData = this.login.getRawValue();
    var serilize = formData;
    this.bs.login(serilize).subscribe((res)=>{
      this.resData = res;
      console.log(this.resData);
      this.Msg = this.resData.msg;
      if(this.resData.err == 0){
        localStorage.setItem('mobile',this.resData.data.id);
        localStorage.setItem('name',this.resData.data.name);
        if(this.resData.data.changePass == true){
          this.forgotD = false;
          this.loginD = false;
          this.changeD = true;
          this.router.navigate(['user/dashboard'])
        }
      }
      else (
        this.Error=true
      )
    })
  }
  Forgot(){

  }
  register(){
    this.router.navigate(['/register'])
  }
}
