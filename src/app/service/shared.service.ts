import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public message = new BehaviorSubject('');
  currentMess = this.message.asObservable();
  constructor() { 
  }
   sentMess(categories: any) {
    this.message.next(categories);
  }

}
