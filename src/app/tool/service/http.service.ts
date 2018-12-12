import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';

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

  Get(_url: string, _params: ParamsType = {}): Observable<any> {
    const URL = environment.baseURL + _url;
    const params = new HttpParams({
      fromObject: _params
    });
    return this.httpClient.get<HttpResponse>(URL, { params });
  }
}
