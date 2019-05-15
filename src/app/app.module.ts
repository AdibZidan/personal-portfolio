import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TasksComponent } from "./task-manager/tasks/tasks.component";
import { ChessComponent } from "./chess/chess/chess.component";
import { TaskDetailComponent } from "./task-manager/task-detail/task-detail.component";
import { MessagesComponent } from "./task-manager/messages/messages.component";
import { PortfolioComponent } from "./portfolio/portfolio/portfolio.component";
// import { TodosComponent } from "./todo/todos/todos.component";
// import { ItemComponent } from "./todo/item/item.component";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ChessComponent,
    TaskDetailComponent,
    MessagesComponent,
    PortfolioComponent,
    // TodosComponent,
    // ItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
