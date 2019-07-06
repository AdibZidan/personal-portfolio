import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { TodoModule } from './todo/module/todo.module';

import { MAT_DIALOG_DATA } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    FooterComponent
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
