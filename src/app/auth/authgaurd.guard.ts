import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BakendService } from '../service/backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {
  resData;
  err;
  constructor(private router: Router, private bs: BakendService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var mobile = localStorage.getItem('mobile')
      this.bs.fetchSes(mobile).subscribe((res)=>{
        console.log(res);
        this.resData = res;
        this.err = this.resData.err
      })
    if(localStorage.getItem('name') != null && localStorage.getItem('mobile') != null && this.err == 0){
      return true;
    }
    else{
      this.router.navigate(['/login'])
    }  
  }
}
