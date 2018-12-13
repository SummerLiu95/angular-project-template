import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// http 响应体类型
export interface HttpResponse {
  errorCode: number;
  errorMsg: string;
  data: any;
}

// 参数类型声明
interface ParamsType  {
  [propName: string]: string | string [];
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  Get(_url: string, _params: ParamsType = {}): Observable<any> {
    const URL = environment.baseURL + _url;
    const params = new HttpParams({
      fromObject: _params
    });
    return this.httpClient.get<HttpResponse>(URL, {
      params
    }).pipe(
      catchError(this.handleError)
    );
  }
}
