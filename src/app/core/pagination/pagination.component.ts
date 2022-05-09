import {Component, Input, OnInit} from '@angular/core';
import {PersonService} from "../../components/services/person.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() prevPage: number
  @Input() nextPage: number

  constructor(private homeService: PersonService) {
  }

  ngOnInit(): void {
  }

  loadPageContent(page: number) {
    this.homeService.fetchPersons(page).subscribe({
      error: err => console.log(err)
    })
  }
}
