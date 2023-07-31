import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule}from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive'





@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
