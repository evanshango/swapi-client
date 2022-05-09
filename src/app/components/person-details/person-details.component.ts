import {Component, OnInit} from '@angular/core';
import {PersonService} from "../services/person.service";
import {ActivatedRoute} from "@angular/router";
import {IPerson} from "../../core/models/personResponse";
import {BusyService} from "../services/busy.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  loading: boolean
  personId: any
  person: IPerson
  person$: Observable<IPerson>

  constructor(private personService: PersonService, private route: ActivatedRoute, private busyService: BusyService) {
    this.personId = route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this._loadPersonById()
    this._checkLoading()
  }

  private _loadPersonById() {
    this.personService.fetchPerson(this.personId).subscribe({
      error: err => console.log(err)
    })
    this.person$ = this.personService.person$
  }

  private _checkLoading() {
    this.busyService.isLoading.subscribe(value => {
      this.loading = value
    })
  }
}
