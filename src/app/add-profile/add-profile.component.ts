import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
addProfile:FormGroup
resObj;
resData;
  constructor(private fb:FormBuilder,private bs: BakendService) { }

  ngOnInit() {
    this.fetchH();
    this.form();
  }
  form(){
    this.addProfile = this.fb.group({
      'name':[''],
      'mobile':[''],
      'email':['']
    })
  }
  fetchH(){
    this.bs.fetchAll().subscribe((res)=>{
      console.log(res)
      this.resObj = res
      this.resData = this.resObj.data
    })
  }
  add(){
    let formData = this.addProfile.getRawValue()
    let serilize = formData
    console.log(serilize)
    this.bs.addProfile(serilize).subscribe((res)=>{
      console.log(res);
    })
  }
}
