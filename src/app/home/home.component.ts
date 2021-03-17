import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title="Online Demat Account at Lowest Brokerage Charges"
  constructor(private tss:Title, private meta:Meta, private router: Router) { 
  }

  ngOnInit() {
    this.tss.setTitle(this.title);
    this.meta.addTags([
      {name:'keywords',Content:'Open demat account, open free demat account, open online demat account, online demat account at lowest brokerage charges, free demat and trading account, zero brokerage demat account'},
      {name:'description',Content:' Open Demat account with Dash Back it will provide you lowest brokerage costs. Open your aadhar based paperless demat account to trade faster and smarter.'},
      {name:'robot',Content:'index,follow'}
    ]);
  }
  re(){
    this.router.navigate(['/'])
  }
}
