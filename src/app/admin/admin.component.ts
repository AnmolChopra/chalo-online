import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  login:FormGroup
  resData;
  Tiles;
  Msg;
  constructor(private bs: BakendService, private fb: FormBuilder, private router: Router) { }

 
  ngOnInit() {
    this.loginForm();
  }
  loginForm(){
    this.login = this.fb.group({
      'username' : ['',Validators.required],
      'password' :['',Validators.required]
    })
  }
  loginf(){
    var formData = this.login.getRawValue();
    var serilize = formData;
    this.router.navigate(['/admin/adminDash'])
    // this.bs.adminLog(serilize).subscribe((res)=>{
    //   this.resData = res;
    //   this.Msg = this.resData.msg;
    //   if(this.resData.err == 0){
    //     localStorage.setItem('mobile',this.resData.data.mobile);
    //     localStorage.setItem('name',this.resData.data.name);
    //     this.router.navigate(['/user/dashboard'])
    //   }
    // })
  }
  Forgot(){

  }

}
