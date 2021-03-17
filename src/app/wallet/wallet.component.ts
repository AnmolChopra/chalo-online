import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
 
  wall: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form ()
  }
  form(){
    this.wall=this.fb.group ({
      "field1":[""], "field2":[""]
    })
  }

  submit(){
    let field = this.wall.getRawValue ()
    let field4 = field

    console.log (field4)
  }

}
