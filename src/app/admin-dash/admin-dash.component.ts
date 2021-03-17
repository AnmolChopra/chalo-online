import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getMaxListeners } from 'process';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  name
  ClickF: FormGroup
  constructor(private router: Router, private bs: BakendService, private fb: FormBuilder) { }

  ngOnInit() {
    this.name= localStorage.getItem('name');
    this.form()
  }
  signOut(){
    localStorage.removeItem('mobile');
    localStorage.removeItem('name');
    this.router.navigate(['/login'])
  }
  form(){
    this.ClickF = this.fb.group({
      'name': 'Anmol',
      'email':'anmolchopra123@gmail.com',
      'phone':'9711855888'
    })
  }
  // Click(){
  //   let formData = this.ClickF.getRawValue()
  //   let serilize = formData
  //   window.open("//"+this.bs.click(serilize).subscribe((res)=>{
  //     console.log(res)
  //   }), '_blank')
    
  // }
}
