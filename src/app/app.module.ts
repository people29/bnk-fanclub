import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BnkGirlListComponent } from './component/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlComponent } from './component/bnk-girl/bnk-girl.component';
import { RouterModule, Routes } from "@angular/router";
import { InstagramComponent } from './component/instagram/instagram.component';
import { InstagramListComponent } from './component/instagram-list/instagram-list.component';
import { InstagramItemComponent } from './component/instagram-item/instagram-item.component';
import { BnkSuffixPipe } from './pipes/bnk-suffix.pipe';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/dashboard"},
  { path: "dashboard", component: DashboardComponent},
  { path: "instagram/:instagramId", component: InstagramComponent},

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
