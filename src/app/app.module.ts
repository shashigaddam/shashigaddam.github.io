import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {  PieChartComponent, BarChartComponent } from 'angular-d3-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {PortfolioService} from './portfolio.service';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    // PieChartComponent,
    // BarChartComponent,
    HomeComponent,
    MenuComponent,
    BarchartComponent,
    PortfolioComponent,
    PiechartComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
