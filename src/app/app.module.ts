import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PortfolioComponent } from "./portfolio/portfolio/portfolio.component";
import { AddComponent } from "./todo/add/add.component";
import { ItemComponent } from "./todo/item/item.component";
import { TodosComponent } from "./todo/todos/todos.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddButtonComponent } from './todo/add-button/add-button.component';
import { BodyComponent } from './todo/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    TodosComponent,
    ItemComponent,
    AddComponent,
    HeaderComponent,
    FooterComponent,
    AddButtonComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
