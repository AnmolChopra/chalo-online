import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-send-free-link',
  templateUrl: './send-free-link.component.html',
  styleUrls: ['./send-free-link.component.css']
})
export class SendFreeLinkComponent implements OnInit {
link;
mobile;
id;
resData;
  constructor(private bs: BakendService) { }

  ngOnInit() {
    this.mobile = localStorage.getItem('mobile');
    this.bs.fetchName(this.mobile).subscribe((res)=>{
      this.resData = res
      this.id = this.resData.id
      this.link = 'http://localhost:4200/register/'+this.id
    })
  }
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
