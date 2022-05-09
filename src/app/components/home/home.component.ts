import {Component, OnInit} from '@angular/core';
import {PersonService} from "../services/person.service";
import {Observable} from "rxjs";
import {IResponse} from "../../core/models/personResponse";
import {personListCols} from "../../core/data";
import {IColumns} from "../../core/models/tableStructure";
import {BusyService} from "../services/busy.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  persons$: Observable<IResponse>
  cols: IColumns[] = personListCols
  loading: boolean

  constructor(private homeService: PersonService, private busyService: BusyService) {
  }

  ngOnInit(): void {
    this.persons$ = this.homeService.persons$
    this._checkLoading()
  }

  private _checkLoading() {
    this.busyService.isLoading.subscribe(value => {
      this.loading = value
    })
  }
}
