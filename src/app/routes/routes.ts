import { Routes } from "@angular/router";

import { TasksComponent } from "../task-manager/tasks/tasks.component";
import { ChessComponent } from "../chess/chess/chess.component";
import { PortfolioComponent } from "../portfolio/portfolio/portfolio.component";
import { TodosComponent } from "../todo/todos/todos.component";

export const ROUTES: Routes = [
  { path: "", redirectTo: "portfolio", pathMatch: "full" },
  { path: "task-manager", component: TasksComponent },
  { path: "chess", component: ChessComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "todo", component: TodosComponent }
];
