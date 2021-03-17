import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
call:FormGroup;
name;
mobile;
email;
welCall:boolean=false;
sponserName;
id;
resData;
eng:boolean=false;
hindi:boolean=false;
Option6:boolean=false;
query9:boolean=false;
Option10:boolean=false;
callStat;
MsgStat:boolean=false;
Msg;
stat;
Int;
  constructor(private bs: BakendService, private route:ActivatedRoute, private fb: FormBuilder, private router:Router) { 
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.fetch();
    this.callf();
  }
  callf(){
    this.call = this.fb.group({
      'id' : this.id,
      'name' : this.name,
      'email' : this.email,
      'mobile' : this.mobile,
      'language' : ['',Validators.required],
      'mailR' : ['',Validators.required],
      'login' : ['',Validators.required],
      'platform': ['',Validators.required],
      'queryT' : ['',Validators.required],
      'query':[],
      'referF' : ['',Validators.required]
    })
  }
  callForm(){
    let formData = this.call.getRawValue();
    let serilize = formData;
    this.bs.call(serilize).subscribe((res)=>{
      this.fetch();
    })
  }
  fetch(){
    this.bs.register(this.id).subscribe((res)=>{
      this.resData = res
      this.name = this.resData.name
      this.mobile = this.resData.mobile
      this.email = this.resData.email
      this.sponserName = this.resData.sponserName
      this.callStat = this.resData.welCall
      this.stat = this.resData.formStat
      this.Int = this.resData.int
      if(this.callStat == true){
        this.MsgStat = true;
        this.Msg = "You Have already called " + this.name;
      }
    })
  }
  lang(value){
    let val = value
    if(val == "eng"){
      this.eng = true
      this.hindi = false
    }
    else{
      this.hindi = true
      this.eng = false
    }
  }
  Opt6(value){
    let val = value
    if(val == "no"){
      this.Option6 = true
    }
    else{
      this.Option6 = false
    }
  }
  Opt9(value){
    let val = value
    if(val == "query"){
      this.query9 = true
    }
    else{
      this.query9 = false
    }
  }
  Opt10(value){
    let val = value
    if(val == "no"){
      this.Option10 = true
    }
    else{
      this.Option10 = false
    }
  }
  acc(){
     this.router.navigate(['adminDash/account/'+this.id])
  }
  int(e){
    let int = e
    if(int == 'false'){
      this.bs.int(this.mobile).subscribe((res)=>{
        console.log(res);
      })
    }
  }
}
