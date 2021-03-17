import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
resData;
  constructor(private bs: BakendService) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData(){
    var sponser = localStorage.getItem('mobile');
    this.bs.fetchTeam(sponser).subscribe((res)=>{
      this.resData = res;
    })
  }
}
