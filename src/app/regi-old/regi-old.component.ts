import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-regi-old',
  templateUrl: './regi-old.component.html',
  styleUrls: ['./regi-old.component.css']
})
export class RegiOldComponent implements OnInit {
mobile;
detail:FormGroup;
resObj;
resData;
Msg;
name;
id;
Error;
title="Register now to open free demat and trading account"
resSop;
resName;
  constructor(
    private bs: BakendService, 
    private route:ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder, 
    private tss:Title, 
    private meta:Meta) { }

  ngOnInit() {
    this.detForm();
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
      'id' : ['', Validators.required],
      'name' : ['',Validators.required],
      'mobile': ['',[Validators.required,Validators.pattern]],
      'email': ['',[Validators.required,Validators.pattern]],
      'sponserId': ['',Validators.required],
      'sponserName': [{value:'', disabled:true},Validators.required],
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
  fetch(a){
    this.mobile = a
    if(this.mobile.length == 11){
      this.bs.register(this.mobile).subscribe((res)=>{
        this.resSop = res
        this.resName = this.resSop.name
        this.detail.controls['sponserName'].setValue(this.resName)
      })
    }
  }
}
