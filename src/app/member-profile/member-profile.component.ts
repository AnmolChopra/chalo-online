import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {
mobile;
resData;
personalInfo:FormGroup;
password:FormGroup;
acc:FormGroup;
legal:FormGroup;
name;
Msg;
  constructor(private bs: BakendService, private fb: FormBuilder) {   }

  ngOnInit() {
  this.mobile = localStorage.getItem('mobile');
  this.getDet();
  this.persform();
  this.passform();
  this.accform();
  this.legalform();
  }
  getDet(){
    this.bs.fetchName(this.mobile).subscribe((res)=>{
      this.resData = res;
      this.personalInfo.controls['name'].setValue(this.resData.name);
      this.personalInfo.controls['email'].setValue(this.resData.email);
      this.legal.controls['aadhar'].setValue(this.resData.aadhar);
      this.legal.controls['pan'].setValue(this.resData.pan);
      this.acc.controls['accNo'].setValue(this.resData.accNo);
      this.acc.controls['accName'].setValue(this.resData.accName);
      this.acc.controls['ifsc'].setValue(this.resData.ifsc);
    })
  }
  persform(){
    this.personalInfo = this.fb.group({
      'name' : ['',Validators.required],
      'email' : ['',Validators.required]
    })
  }
  passform(){
    this.password = this.fb.group({
      'oldPass' : ['',Validators.required],
      'newPass' : ['',Validators.required]
    })
  }
  accform(){
    this.acc = this.fb.group({
      'accNo' : ['',Validators.required],
      'accName' : ['',Validators.required],
      'ifsc' : ['',Validators.required]
    })
  }
  legalform(){
    this.legal = this.fb.group({
      'aadhar' : ['',Validators.required],
      'pan': ['',Validators.required]
    })
  }
  pers(){
    var formData = this.personalInfo.getRawValue();
    var serilize = formData;
    this.bs.updateInfo(serilize).subscribe((res)=>{
      console.log(res);
    })
  }
  findPass(){
    let old = this.password.controls['oldPass'].value;
    var formData = new FormData();
    formData.append('old', old);
    formData.append('mobile', this.mobile);
    this.bs.findPass(formData).subscribe((res)=>{
      console.log(res);
    })
  }
  pass(){
    var formData = this.password.getRawValue();
    var serilize = formData;
    this.bs.updatePass(serilize)
  }
  accDet(){

  }
  legalDet(){

  }
}
