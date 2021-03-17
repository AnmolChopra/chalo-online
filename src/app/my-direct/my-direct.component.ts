import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-my-direct',
  templateUrl: './my-direct.component.html',
  styleUrls: ['./my-direct.component.css']
})
export class MyDirectComponent implements OnInit {
resData;
  constructor(private bs: BakendService) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData(){
    var sponser = localStorage.getItem('mobile');
    this.bs.fetchDirect(sponser).subscribe((res)=>{
      this.resData = res;
    })
  }
}
