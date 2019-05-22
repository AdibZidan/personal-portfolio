import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { Todo } from "../../classes/Todo";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})

export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
