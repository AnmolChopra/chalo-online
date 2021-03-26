import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutComponent implements OnInit {
  resData;
  act:FormGroup
  constructor(private bs: BakendService, private fb: FormBuilder) { }

  ngOnInit() {
    this.fetch();
    this.activate()
  }
  fetch(){
    this.bs.fetchPass().subscribe((res)=>{
      this.resData = res
      // console.log(res)
    })
  }
  activate(){
    this.act = this.fb.group({
      'mobile' : [''],

    })
  }
  activ(id){
   let Id = id
   this.act.controls['mobile'].setValue(Id);
   var formData = this.act.getRawValue();
   var serilize = formData;
   console.log(serilize);
   this.bs.updatePkg(serilize).subscribe((res)=>{
     console.log(res);
   })
  }
  delete(_id){
    let Id = _id 
    console.log(Id);
    this.bs.deleteMem(Id).subscribe((res)=>{
      this.fetch();
    })
  }
}
