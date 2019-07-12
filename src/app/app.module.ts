import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './portfolio/header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './portfolio/about/about.component';
import { FooterComponent } from './portfolio/footer/footer.component';

import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { TodoModule } from './task-manager/module/todo.module';

import { MAT_DIALOG_DATA } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TodoModule
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent]
})

export class AppModule { }
