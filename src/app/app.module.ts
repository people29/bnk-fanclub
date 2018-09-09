import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BnkGirlListComponent } from './component/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlComponent } from './component/bnk-girl/bnk-girl.component';
import { InstagramComponent } from './component/instagram/instagram.component';
import { InstagramListComponent } from './component/instagram-list/instagram-list.component';
import { InstagramItemComponent } from './component/instagram-item/instagram-item.component';
import { BnkSuffixPipe } from './pipes/bnk-suffix.pipe';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';
import { MemberEditComponent } from './component/member-edit/member-edit.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/dashboard"},
  { path: "dashboard", component: DashboardComponent},
  { path: "instagram/:instagramId", component: InstagramComponent},
  { path: "login", component: LoginComponent},
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
  { path: "admin/edit/:id", component: MemberEditComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent,
    BnkGirlComponent,
    InstagramComponent,
    InstagramListComponent,
    InstagramItemComponent,
    BnkSuffixPipe,
    LoginComponent,
    AdminComponent,
    MemberEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
