import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MyDirectComponent } from './my-direct/my-direct.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { SendFreeLinkComponent } from './send-free-link/send-free-link.component';
import { UserComponent } from './user/user.component';
import { WalletComponent } from './wallet/wallet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatIconModule, MatGridListModule, MatExpansionModule, MatDatepickerModule, MatTableModule, MatSortModule, MatPaginatorModule, MatTabsModule, MatSelectModule, MatRadioModule, MatTreeModule, MatNativeDateModule, MatCardModule, MatToolbarModule} from '@angular/material';
import { AdminComponent } from './admin/admin.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { PayoutComponent } from './payout/payout.component';
import { RegisterComponent } from './register/register.component';
import { CallComponent } from './call/call.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SkipComponent } from './skip/skip.component';
import { HomeComponent } from './home/home.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MarketingLoginComponent } from './marketing-login/marketing-login.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { FaqComponent } from './faq/faq.component';
import { BrokerageComponent } from './brokerage/brokerage.component';
import { LevelComponent } from './level/level.component';
import { RewardComponent } from './reward/reward.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { RegiOldComponent } from './regi-old/regi-old.component';


@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    DashboardComponent,
    LoginComponent,
    MemberComponent,
    MemberProfileComponent,
    MyDirectComponent,
    MyTeamComponent,
    NewMemberComponent,
    PaymentHistoryComponent,
    SendFreeLinkComponent,
    UserComponent,
    WalletComponent,
    AdminComponent,
    AdminDashComponent,
    PayoutComponent,
    RegisterComponent,
    CallComponent,
    RegistrationComponent,
    ContactUsComponent,
    SkipComponent,
    HomeComponent,
    MarketingComponent,
    MarketingLoginComponent,
    AddProfileComponent,
    FaqComponent,
    BrokerageComponent,
    LevelComponent,
    RewardComponent,
    LeadershipComponent,
    AddPersonComponent,
    RegiOldComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
