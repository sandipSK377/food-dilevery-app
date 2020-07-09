import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  defaultData:any;
  messageSource = new BehaviorSubject(this.defaultData);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(data) {
    this.messageSource.next(data)
  }
}
