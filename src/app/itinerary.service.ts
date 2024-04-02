import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  private notifyNavComponent = new Subject<void>();
  constructor() { }
  private notify = new Subject<any>();
  public notifyObservable$ = this.notify.asObservable();

  public goToAbout(data: string) {
    if (data) {
      this.notify.next(data);
    }
  }
}
