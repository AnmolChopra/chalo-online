import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
resData
resObj
  constructor(private bs: BakendService) { }

  ngOnInit() {
    this.fetch()
  }
  fetch(){
    this.bs.fetchOld().subscribe((res)=>{
      this.resObj = res
      this.resData = this.resObj.data
      console.log(res)
    })
  }
}
