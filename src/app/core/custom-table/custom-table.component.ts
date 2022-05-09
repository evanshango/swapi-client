import {Component, Input, OnInit} from '@angular/core';
import {IResponse} from "../models/personResponse";
import {IColumns} from "../models/tableStructure";

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() cols: IColumns[]
  @Input() data: IResponse

  constructor() {
  }

  ngOnInit(): void {
  }
}
