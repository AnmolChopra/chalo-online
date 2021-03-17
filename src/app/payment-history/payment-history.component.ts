import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BakendService } from '../service/backend.service';
import { MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit{
resData;
resObj:[];
arraySplit;
page=0;
pageVal;
printP;
  constructor(private bs: BakendService) { }

  ngOnInit() {
    this.pageVal = this.page + 1;
    this.fetchS();
  }
  fetchS(){
    let id = localStorage.getItem('mobile')
    this.bs.fetchStatement(id).subscribe((res)=>{
      this.resData = res;
      this.resObj = this.resData.data
      let i = 0
      let arrayLength = this.resObj.length;
      let tempArray = [];

      for (i=0;i<arrayLength;i+=10) {
        let chuck = this.resObj.slice(i, i+10);
        tempArray.push(chuck);
      }
      this.arraySplit = tempArray
      this.printP = this.arraySplit[(0)]
    });
  }
  nextPage(){
    // this.page += 1;
    // this.pageVal = this.page + 1;
    // this.printP = this.arraySplit[(this.page)]
    if( this.page <= 0){
      this.page = 0
      this.pageVal = this.page +1
      this.printP = this.arraySplit[(this.page)]
    }
    if( this.page >= (this.arraySplit.length-1)){
      this.page = this.arraySplit.length - 1
      this.pageVal = this.page +1
      this.printP = this.arraySplit[(this.page)]
    }
    else{
      this.page += 1 
      this.pageVal = this.page + 1
      this.printP = this.arraySplit[(this.page)]
    }
  }
  changePage(a){
    // this.page = a
    let b = a-1
    if( b <= 0){
      this.page = 0
      this.pageVal = this.page +1
      this.printP = this.arraySplit[(this.page)]
    }
    if( b > (this.arraySplit.length-1)){
      this.page = this.arraySplit.length - 1
      this.pageVal = this.page +1
      this.printP = this.arraySplit[(this.page)]
    }
    else{
      this.page = b
      this.pageVal = this.page + 1
      this.printP = this.arraySplit[(this.page)]
    }
  }
  prevPage(){
    // this.page -= 1;
    // this.pageVal = this.page + 1;
    // this.printP = this.arraySplit[(this.page)]
    if( this.page <= 0){
      this.page = 0
      this.pageVal = this.page +1
      this.printP = this.arraySplit[(this.page)]
    }
    if( this.page >= (this.arraySplit.length-1)){
      this.page = this.arraySplit.length - 1
      this.pageVal = this.page +1
      this.printP = this.arraySplit[(this.page)]
    }
    else{
      this.page -= 1
      this.pageVal = this.page + 1
      this.printP = this.arraySplit[(this.page)]
    }
  }
  other(a){
    console.log(a)
    let i = 0
    let arrayLength = this.resObj.length;
    let tempArray = [];

    if(a == 10){
      for (i=0;i<arrayLength;i+=10) {
        let chuck = this.resObj.slice(i, i+10);
        tempArray.push(chuck);
      }
    }
    if(a == 20){
      for (i=0;i<arrayLength;i+=20) {
        let chuck = this.resObj.slice(i, i+20);
        tempArray.push(chuck);
      }
    }
    if(a == 30){
      for (i=0;i<arrayLength;i+=30) {
        let chuck = this.resObj.slice(i, i+30);
        tempArray.push(chuck);
      }
    }
    if(a == 50){
      for (i=0;i<arrayLength;i+=50) {
        let chuck = this.resObj.slice(i, i+50);
        tempArray.push(chuck);
      }
    }
    if(a == 100){
      for (i=0;i<arrayLength;i+=100) {
        let chuck = this.resObj.slice(i, i+100);
        tempArray.push(chuck);
      }
    }
    this.arraySplit = tempArray
    console.log(this.arraySplit)
    this.printP = this.arraySplit[(0)]
    this.page = 0
    this.pageVal = this.page + 1
  }
  printAble(){
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Dash Back - Payment History</title>
          <style>
        .Thead{
            max-width: 70vw;
            max-height: 5vh;
            text-align: center;
            background-color: aliceblue;
        }
        td, th {
            width: 16.6%;
            text-align: center;
          }
          .Tcont{
            margin-top: 7vh;
            width: 69vw;
            max-height: 60vh;
            text-align: center;
        }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
