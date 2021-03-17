import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name;
mobile;
income:boolean=false;
team:boolean=false;
  constructor(private router: Router, private bs: BakendService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.name= localStorage.getItem('name');
    this.mobile= localStorage.getItem('mobile');
    let c = this.router.url
    if(c == "/user" || c == "/user/"){
      this.router.navigate(['/user/dashboard'])
    }
  }
  signOut(){
    localStorage.removeItem('mobile');
    localStorage.removeItem('name');
    this.router.navigate(['/login'])
  }
  session(){
    this.bs.fetchSes(this.mobile).subscribe((res)=>{
      console.log(res);
    })
  }
  teamC(){
    this.income =false;
    if(this.team == true){
      this.team = false
    }
    else{
      this.team = true
    }
  }
  incomeC(){
    this.team = false;
    if(this.income == true){
      this.income = false
    }
    else{
      this.income =true
    }
  }
  rest(){
    this.income = false;
    this.team = false;
  }
  profile(){
    this.router.navigate(['user/member-profile'])
  }
}
