import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
regi:FormGroup
resData;
Msg;
  constructor(private fb:FormBuilder, private bs: BakendService) { }

  ngOnInit() {
    this.form();
  }
  form(){
    this.regi = this.fb.group({
      "id":[''],
      'name': [''],
      'mobile': [''],
      'email': [''],
      'sponserId':['']
    })
  }
  Regi(){
    let formData = this.regi.getRawValue()
    let serilize = formData
    console.log(serilize)
    this.bs.addMember(serilize).subscribe((res)=>{
      this.resData = res
      console.log(res)
     this.Msg = this.resData.msg
    })
  }
}
