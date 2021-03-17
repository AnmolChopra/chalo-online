import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
level:boolean=false;
brokerage:boolean=false;
reward:boolean=false;
leader:boolean=false;
val;
  constructor(private bs:BakendService, private route:ActivatedRoute) { 
    this.val = this.route.snapshot.paramMap.get("id");
    
  }

  ngOnInit() {
    if(this.val == 'level_income'){
      console.log('leve')
    }
    else if(this.val == 'brokerage_income'){
      console.log('brok')
    }
    else if(this.val == 'rewards'){
      console.log('reward')
    }
    else if(this.val == 'leadership_club'){
      console.log('leader')
    }
  }

}
