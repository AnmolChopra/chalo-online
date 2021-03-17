import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyDirectComponent } from './my-direct/my-direct.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { LoginComponent } from './login/login.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { MemberComponent } from './member/member.component';
import { PayoutComponent } from './payout/payout.component';
import { SendFreeLinkComponent } from './send-free-link/send-free-link.component';
import { RegisterComponent } from './register/register.component';
import { AuthgaurdGuard } from './auth/authgaurd.guard';
import { CallComponent } from './call/call.component';
import { RegistrationComponent } from './registration/registration.component';
import { IncomeComponent } from './income/income.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SkipComponent } from './skip/skip.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { WalletComponent } from './wallet/wallet.component';
import { LevelComponent } from './level/level.component';
import { BrokerageComponent } from './brokerage/brokerage.component';
import { RewardComponent } from './reward/reward.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { RegiOldComponent } from './regi-old/regi-old.component';


const routes: Routes = [
  {path:'user', component:UserComponent, children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'my-Direct', component:MyDirectComponent},
    {path:'my-Team', component:MyTeamComponent},
    {path:'member-profile', component:MemberProfileComponent},
    {path: 'link', component:SendFreeLinkComponent},
    {path: 'activate', component:RegistrationComponent},
    {path: 'income', component:IncomeComponent, children:[
      {path: 'level_income', component:LevelComponent},
      {path: 'brokerage_income', component:BrokerageComponent},
      {path: 'reward', component:RewardComponent},
      {path: 'leadership_club', component:LeadershipComponent}
    ]},
    {path:'payment_history', component:PaymentHistoryComponent},
    {path: 'contact_us', component:ContactUsComponent},
    {path:'user', redirectTo:'user/dashboard', pathMatch: 'full'},
  ]},
  {path:'register/:id',component: RegisterComponent},
  {path:'register', component: RegisterComponent},
  {path: 'wallet', component: WalletComponent},
  {path:'admin', component:AdminComponent},
    {path:'adminDash', component:AdminDashComponent, children:[
      {path:'member', component:MemberComponent},
      {path:'payout', component:PayoutComponent},
      {path:'phoneCall/:id', component:CallComponent},
      {path: 'account/:id', component:RegistrationComponent},
      {path: 'skip', component:SkipComponent},
      {path:'add', component:AddPersonComponent},
      {path:'profile', component:AddProfileComponent},
      {path:'old', component:AddPersonComponent},
      {path:'Self', component:RegiOldComponent}
    ]},
  {path:'login', component:LoginComponent},
  {path: '', component:HomeComponent},
  {path:'work', component:FaqComponent},
  {path: '', redirectTo:'', pathMatch: 'full'},
  {path:'**', pathMatch: 'full', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
