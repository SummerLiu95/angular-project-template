import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirm(message: string = '是否确认离开该页？'): Observable<boolean> {
    const result = window.confirm(message || 'Is it OK?');
    return of(result);
  }
}
