import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonService} from "../../components/services/person.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() title: String
  @Input() detailPage: boolean
  @Input() extras: String
  form: FormGroup
  isSearch: boolean = false

  constructor(private homeService: PersonService) {
  }

  ngOnInit(): void {
    this._loadForm()
  }

  get searchForm() {
    return this.form.controls
  }

  private _loadForm() {
    this.form = new FormGroup({
      search: new FormControl('', Validators.required)
    })
  }

  performSearch() {
    let searchTerm = this.form.value.search
    if (searchTerm !== ''){
      this.isSearch = true
      this.homeService.fetchPersons(null, searchTerm).subscribe({
        error: err => console.log(err)
      })
    } else {
      this.isSearch = false
    }
  }

  clearSearch() {
    this.searchForm["search"].setValue('')
    this.homeService.fetchPersons().subscribe({
      error: err => console.log(err)
    })
    this.isSearch = false
  }
}
