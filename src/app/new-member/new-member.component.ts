import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {
detail:FormGroup;
plInfo:boolean = true;
comminfo:boolean = false;
legalinfo:boolean = false;
accinfo:boolean = false;
mobile;
nameData;
name;
Msg;
resData;
LoginId;
  constructor(private bs: BakendService, private fb: FormBuilder) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.mobile = localStorage.getItem('mobile');
    this.detailForm();
    this.patch();
  }
  detailForm(){
    this.detail = this.fb.group({
      'name' : ['',Validators.required],
      'mobile': ['',Validators.required],
      'email': ['',Validators.required],
      'sponserId': ['',Validators.required],
      'sponserName': ['',Validators.required],
      'aadhar': [''],
      'pan': ['']
    })
  }
  members(){
    var formData = this.detail.getRawValue();
    var serilize = formData;
    // console.log(serilize)
    this.bs.addMember(serilize).subscribe((res)=>{
      this.resData = res
      // console.log(this.resData)
      this.Msg = this.resData.msg
      this.LoginId = '. Your Login ID is '+this.resData.data3.loginId;
      if(this.resData.err == 0){
        this.detail.reset();
      }
    })
  }
  patch(){
    this.detail.controls['sponserId'].setValue(this.mobile);
    this.detail.controls['sponserName'].setValue(this.name);
  }
}
