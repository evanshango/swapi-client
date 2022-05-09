import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  private _isLoading$ = new BehaviorSubject(false)
  isLoading: Observable<boolean> = this._isLoading$.pipe(switchMap(value => {
    if (!value){
      return of(false)
    }
    return of(true)
  }))
  busyRequestCount = 0

  constructor() { }

  async busy(): Promise<void>{
    this.busyRequestCount++
    this._isLoading$.next(true)
  }

  async idle(): Promise<void>{
    this.busyRequestCount--
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0
      this._isLoading$.next(false)
    }
  }
}
