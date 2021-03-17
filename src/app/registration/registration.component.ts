import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BakendService } from '../service/backend.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
detail:FormGroup;
pakage:FormGroup;
OccuO:boolean=false;
incP:boolean=false;
incomeName;
addP:boolean=false;
addressProfName;
aadharFile;
aadharSrc
aadharBackFile;
aadharBackSrc;
panFile;
panSrc;
photoFile;
photoSrc;
signFile;
signSrc;
bankFile;
bankSrc;
incomeproofFile;
incomeproofSrc;
addresproofFile;
addresproofSrc;
Form:boolean=true;
formView:boolean=false
upload:boolean=false;
resData;
Name;
Id = localStorage.getItem('mobile');
email;
mobile;
maxDate = new Date(2005,0,1);
Msg;
msgData;
nextVal;
  constructor(private bs: BakendService, private fb: FormBuilder, private router: Router, private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.id();
    this.fetch();
    this.accountForm();
    this.pakge();
  }
  
  accountForm(){
    this.detail = this.fb.group({
      name: [{value:'',disabled:true},Validators.required],
      id: [''],
      email: [{value:'',disabled:true},Validators.required],
      mobile: [{value:'',disabled:true},Validators.required],
      dob: ['',Validators.required],
      gender: ['',Validators.required],
      marital: ['',Validators.required],
      income: ['',Validators.required],
      Occ: ['',Validators.required],
      otherOcc: [''],
      address: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      pincode: ['',[Validators.required,Validators.pattern]],
      father: ['',Validators.required],
      mother: ['',Validators.required],
      aadharNo: ['',[Validators.required,Validators.pattern]],
      panNo: ['',[Validators.required,Validators.pattern]],
      incomeProofType: ['',Validators.required],
      addressProf: ['',Validators.required]
    })
  }
  aadhar(eve){
    this.aadharSrc = '../../assets/person-icon.png'
    if (eve.target.files && eve.target.files.length > 0) {
      this.aadharFile = eve.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.aadharSrc = reader.result;
      console.log(reader.readAsDataURL)

      reader.readAsDataURL(this.aadharFile);
    }
    else{
      console.log('empty')
    }
  }
  aadharBack(eve){
    if (eve.target.files && eve.target.files.length > 0) {
      this.aadharBackFile = eve.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.aadharBackSrc = reader.result;

      reader.readAsDataURL(this.aadharBackFile);
    }
  }
  pan(eve){
    if (eve.target.files && eve.target.files.length > 0) {
      this.panFile = eve.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.panSrc = reader.result;

      reader.readAsDataURL(this.panFile);
    }
  }
  photo(eve){
    if (eve.target.files && eve.target.files.length > 0) {
      this.photoFile = eve.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.photoSrc = reader.result;

      reader.readAsDataURL(this.photoFile);
    }
  }
  sign(eve){
    if (eve.target.files && eve.target.files.length > 0) {
      this.signFile = eve.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.signSrc = reader.result;

      reader.readAsDataURL(this.signFile);
    }
  }
  bank(eve){
    if (eve.target.files && eve.target.files.length > 0) {
      this.bankFile = eve.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.bankSrc = reader.result;

      reader.readAsDataURL(this.bankFile);
    }
  }
  incomeProf(eve){
    if (eve.target.files && eve.target.files.length > 0) {
      this.incomeproofFile = eve.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.incomeproofSrc = reader.result;

      reader.readAsDataURL(this.incomeproofFile);
    }
  }
  addressProf(eve){
    if (eve.target.files && eve.target.files.length > 0) {
      this.addresproofFile = eve.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.addresproofSrc = reader.result;

      reader.readAsDataURL(this.addresproofFile);
    }
  }
  form(){
    let formData = this.detail.getRawValue()
    let serilize = formData;
    console.log(serilize);
    this.upload = true;
    this.Form = false;
    this.nextVal = 'aadhar'
    this.bs.updateForm(serilize).subscribe((res)=>{
      console.log(res);
      this.msgData = res
      this.Msg = this.msgData.msg
    })
  }
  next(e){
    console.log(e)
    // this.nextVal = ' '
    this.nextVal = e
    console.log(this.nextVal)
  }
  fetch(){
    this.bs.register(this.Id).subscribe((res)=>{
      this.resData = res;
      console.log(res)
      this.Name = this.resData.name
      this.mobile = this.resData.mobile
      this.email = this.resData.email
      this.detail.controls['name'].setValue(this.Name);
      this.detail.controls['mobile'].setValue(this.mobile);
      this.pakage.controls['mobile'].setValue(this.mobile);
      this.detail.controls['email'].setValue(this.email);
      this.detail.controls['id'].setValue(this.Id);
    })
  }
  pakge(){
    this.pakage =this.fb.group({
      mobile: [''],
      pkg : ['']
    })
  }
  id(){
    
  }
  pkgSub(){
    let formData = this.pakage.getRawValue()
    let serilize = formData
    console.log(serilize)
    this.bs.updatePkg(serilize).subscribe((res)=>{
      
    })
  }
  other(a){
    if(a == 'others'){
      console.log('work')
      this.detail.controls.otherOcc.invalid
    }
    this.detail.updateValueAndValidity();
  }
  incomeP(eve){
    console.log('working')
  }
  addresP(eve){
    console.log('working')
  }
}
