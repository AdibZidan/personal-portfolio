import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './portfolio/header/header.component';

import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { PortfolioModule } from './portfolio/module/portfolio.module';
import { TaskModule } from './task-manager/module/task.module';

import { MAT_DIALOG_DATA } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PortfolioModule,
    TaskModule
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})

export class AppModule { }
