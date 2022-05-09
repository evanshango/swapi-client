import {Component, OnInit} from '@angular/core';
import {PersonService} from "./components/services/person.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'swapi-client';

  constructor(private homeService: PersonService) {
  }

  ngOnInit(): void {
    this._fetchPersons()
  }

  private _fetchPersons() {
    this.homeService.fetchPersons().subscribe({
      error: err => console.log(err),
    })
  }
}
