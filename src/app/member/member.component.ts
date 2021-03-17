import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
resData;
accData;
mobData;
genData;
Name;
Id;
Mobile;
Sponser;
SponserId;
email;
stat;
Msg;
act:FormGroup
userId:FormGroup
mobile:FormGroup
gen:boolean=false;
  constructor(private bs: BakendService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.fetch();
    this.mobileForm();
    this.idForm();
    this.fetchacc();
  }
  fetch(){
    this.bs.callList().subscribe((res)=>{
      this.resData = res
    })
  }
  fetchacc(){
    this.bs.accList().subscribe((res)=>{
      this.accData = res
    })
  }
  idForm(){
    this.userId = this.fb.group({
      'id' : ['',Validators.required]
    })
  }
  mobileForm(){
    this.mobile = this.fb.group({
      'mobile' : ['',Validators.required]
    })
  }
  delete(_id){
    let Id = _id
    this.bs.deleteMem(Id).subscribe((res)=>{
      this.fetch();
    })
  }
  det(id){
    let ID = id
    this.router.navigate(['adminDash/phoneCall/'+ID]);
  }
  id(){

  }
  mob(){
    
  }
  mob1(){
    let formData = this.mobile.controls['mobile'].value
    this.bs.mobSearch(formData).subscribe((res)=>{
      this.mobData = res
      console.log(res)
      if(this.mobData.err == 0){
       this.Id = this.mobData.data.id;
       this.Name = this.mobData.data.name;
       this.mobile = this.mobData.data.mobile;
       this.email = this.mobData.data.email;
       this.Sponser = this.mobData.data.sponserName;
       this.SponserId = this.mobData.data.sponserId;
       this.stat = this.mobData.data.status;
       this.gen = true;
      }
    })
  }
  Gen(){
    this.bs.genPass(this.Id).subscribe((res)=>{
      this.genData = res;
      this.Msg = this.genData.msg;
    })
  }
  clear(){
    console.log('working');
  }
}
