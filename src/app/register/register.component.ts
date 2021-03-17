import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
mobile;
detail:FormGroup;
resObj;
resData;
Msg;
name;
id;
Error:boolean=false;
sponser:boolean =true;
title="Register now to open free demat and trading account"
  constructor(
    private bs: BakendService, 
    private route:ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder, 
    private tss:Title, 
    private meta:Meta) {
    this.mobile = this.route.snapshot.paramMap.get("id");
    this.bs.register(this.mobile).subscribe((res)=>{
      this.resObj = res
      if(this.resObj == null || this.resObj.err == 1 || this.mobile == 'DB200100001' || this.mobile == 'DB200100002' || this.mobile == 'DB200100003' || this.mobile == 'DB200100004' || this.mobile == 'DB200100004' ){
        this.router.navigate(['/register'])
      }
      else{
        this.name = this.resObj.name
        this.id = this.resObj.id
        this.detail.controls['sponserId'].setValue(this.id)
        this.detail.controls['sponserName'].setValue(this.name);
      }
    })
   }

  ngOnInit() {
    this.detForm();
    if( this.mobile == 'DB200100005' || this.mobile == null ){
      this.sponser = false
      this.detail.controls['sponserId'].setValue('DB200100005')
      this.detail.controls['sponserName'].setValue('Dash Back');
    }
    {
      this.tss.setTitle(this.title);
      this.meta.addTags([
        {name:'keywords',content:'Open demat account, open free demat account, open online demat account, online demat account at lowest brokerage charges, free demat and trading account, zero brokerage demat account, register now to open demat account'},
        {name:'description',content:'Zero Demat Account Opening Fee. Register Now! To open a demat account with Dash Back at lowest Brokerage Rates. Open A/c in just 5 mins. Trade Anywhere Anytime. With dash back 100% Paperless Demat A/c.'},
        {name:'robot',content:'index,follow'}
      ]);
    }
  }
  detForm(){
    this.detail = this.fb.group({
      'name' : ['',Validators.required],
      'mobile': ['',[Validators.required,Validators.pattern]],
      'email': ['',[Validators.required,Validators.pattern]],
      'sponserId': [{value :'',disabled: true},Validators.required],
      'sponserName': [{value :'',disabled: true},Validators.required],
    })
  }
  members(){
    var formData = this.detail.getRawValue();
    var serilize = formData;
    this.bs.addMember(serilize).subscribe((res)=>{
      this.resData = res
      this.Msg = this.resData.msg
      if(this.resData.err == 0){
        this.detail.reset();
        this.detail.markAsUntouched()
      }
      else{
        this.Error=true;
      }
    })
  }
} 