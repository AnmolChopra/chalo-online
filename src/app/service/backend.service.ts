import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BakendService {
Url="http://localhost:1234/"
// 103.129.98.168
  constructor(private http:HttpClient) { }

  // login
  login(data){
    return this.http.post(this.Url+'login',data);
  }
  // Add Member
  addMember(data){
    return this.http.post(this.Url+'addMember',data);
  }
  // fetch Direct
  fetchDirect(data){
    return this.http.get(this.Url+'fetchDirect/'+data);
  }
  // fetch Name
  fetchName(data){
    return this.http.get(this.Url+'fetchName/'+data);
  }
  //   fetch Team 
  fetchTeam(data){
    return this.http.get(this.Url+'fetchTeam/'+data);
  }
  // update password
  updatePass(data){
    return this.http.post(this.Url+'updatePass',data);
  }
  // personal info update
  updateInfo(data){
    return this.http.post(this.Url+'updateInfo',data);
  }
  //  Update Legal
  updateLegal(data){
    return this.http.post(this.Url+'updateLegal',data);
  }
  //   Update Acc
  updateAcc(data){
    return this.http.post(this.Url+'updateAcc',data);
  }
  // find Pass
  findPass(data){
    return this.http.post(this.Url+'findPass',data);
  }
  // admin login
  adminLog(data){
    return this.http.post(this.Url+'adminLog',data);
  }
  //  Activate
  activate(data){
    return this.http.post(this.Url+'activate',data);
  }
  // Fetch Members
  fetchMember(){
    return this.http.get(this.Url+'fetchMember');
  }
  //  Delete Member
  deleteMem(data){
    return this.http.get(this.Url+'deleteMem/'+data);
  }
  // fetch Active
  fetchActive(){
    return this.http.get(this.Url+'fetchActive');
  }
  // PAYOUT
  payout(data){
    return this.http.post(this.Url+'payout',data);
  }
  // create id
  createId(data){
    return this.http.post(this.Url+'create',data);
  }
  // register
  register(data){
    return this.http.get(this.Url+'regi/'+data);
  }
  // fetch Baclance 
  fetchBal(data){
    return this.http.get(this.Url+'fetchBal/'+data);
  }
  // fetch session
  fetchSes(data){
    return this.http.get(this.Url+'fetchSes/'+data);
  }
  // call query
  call(data){
    return this.http.post(this.Url+'call',data);
  }
  // welcome call list
  callList(){
    return this.http.get(this.Url+'callList');
  }
  // Account opening call list
  accList(){
    return this.http.get(this.Url+'accList');
  }
  // search by mobile
  mobSearch(data){
    return this.http.get(this.Url+'mobile/'+data);
  }
  // Raise query
  query(data){
    return this.http.post(this.Url+'query',data);
  }
  // generate Password
  genPass(data){
    return this.http.get(this.Url+'genPass/'+data);
  }
  //  Update Form
  updateForm(data){
    return this.http.post(this.Url+'updateForm',data);
  }
  // skip 
  skip(data){
    return this.http.post(this.Url+'skip',data);
  }
  // add-Profile
  addProfile(data){
    return this.http.post(this.Url+'first',data);
  }
  // int
  int(data){
    return this.http.get(this.Url+'int/'+data);
  }
  //fetchPass
  fetchPass(){
    return this.http.get(this.Url+'fetchPass')
  }
  //fetch Level
  fetchLevel(data){
    return this.http.get(this.Url+'fetchLevel/'+data);
  }
  // fetch Statement
  fetchStatement(data){
    return this.http.get(this.Url+'fetchStatement/'+data);
  }
  fetchAll(){
    return this.http.get(this.Url+'fetchAll');
  }
  fetchOld(){
    return this.http.get(this.Url+'fetchOld');
  }
  updatePkg(data){
    return this.http.post(this.Url+'pkg',data)
  }
}
