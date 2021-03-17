import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements OnInit {
skip:FormGroup
resData;
Msg;
  constructor(private bs: BakendService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form();
  }
  form(){
    this.skip = this.fb.group({
      no : ['',Validators.required]
    })
  }
  sub(){
    let formData = this.skip.getRawValue();
    let serilize = formData;
    this.bs.skip(serilize).subscribe((res)=>{
      this.resData= res
      if(this.resData.err == 0){
        this.skip.reset();
        this.Msg = this.resData.msg
      }
    })
  }
}
