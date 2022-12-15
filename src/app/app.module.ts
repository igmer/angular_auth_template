import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./modules/material/material.module";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import {MatListModule} from "@angular/material/list";
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ListComponent } from './components/user/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    FooterComponent,
    ListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        MatListModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
