import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
resData;
Data;
totalAmt;
total;
  constructor(private bs: BakendService) { }

  ngOnInit() {
    this.level()
  }
  level(){
   let id = localStorage.getItem('mobile');
   this.bs.fetchLevel(id).subscribe((res)=>{
     this.resData = res;
     this.Data = this.resData.data
     this.total = (this.Data.lvl1.length) + (this.Data.lvl2.length) + (this.Data.lvl3.length) + (this.Data.lvl4.length) 
                  + (this.Data.lvl5.length) + (this.Data.lvl6.length) + (this.Data.lvl7.length) + (this.Data.lvl8.length)
                  + (this.Data.lvl9.length) + (this.Data.lvl10.length) + (this.Data.lvl11.length) + (this.Data.lvl12.length);
     this.totalAmt = (this.Data.lvl1.length*300) + (this.Data.lvl2.length*65) + (this.Data.lvl3.length*50) + (this.Data.lvl4.length*40) 
                    + (this.Data.lvl5.length*30) + (this.Data.lvl6.length*25) + (this.Data.lvl7.length*20) + (this.Data.lvl8.length*20)
                    + (this.Data.lvl9.length*15) + (this.Data.lvl10.length*15) + (this.Data.lvl11.length*10) + (this.Data.lvl12.length*10);
   })
  }
}
