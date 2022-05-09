import {Injectable} from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {map} from "rxjs/operators";
import {Observable, ReplaySubject} from "rxjs";
import {IPerson, IResponse} from "../../core/models/personResponse";

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  private personsSource = new ReplaySubject<IResponse>(1)
  private personSource = new ReplaySubject<IPerson>(1)
  persons$ = this.personsSource.asObservable()
  person$ = this.personSource.asObservable()

  FETCH_PERSONS = gql`
  query($page: Int, $name: String){
    persons(page: $page, name: $name){
      count
      prevPage
      nextPage
      content{
        id
        name
        height
        mass
        gender
        planet
        films{
          url
        }
      }
    }
  }`

  FETCH_PERSON = gql`
  query($personId: Int){
    person(personId: $personId){
      name
      height
      mass
      gender
      hairColor
      skinColor
      birthYear
      eyeColor
      created
      edited
      planet{
        name
        population
        terrain
        climate
        diameter
        gravity
      }
      films{
        url
      }
    }
  }`

  constructor(private apollo: Apollo) {
  }

  fetchPersons(page: number = 1, name: string = ''): Observable<void> {
    return this.apollo.watchQuery({
      query: this.FETCH_PERSONS,
      variables: {page, name}
    }).valueChanges.pipe(map(({data}: any) => this.personsSource.next(data.persons)))
  }

  fetchPerson(id: number): Observable<void> {
    return this.apollo.watchQuery({
      query: this.FETCH_PERSON,
      variables: {personId: id}
    }).valueChanges.pipe(map(({data}: any) => this.personSource.next(data.person)))
  }

}
