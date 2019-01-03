import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {NzMessageService} from 'ng-zorro-antd';

// http 响应体类型
export interface HttpResponse<T = any> {
  code: number;
  msg: string;
  data: T;
}

export enum StateCode {
  error =  400,
  ok = 200,
  timeout = 408,
  serviceError = 500
}

export enum PostContentType {
  default = 0,
  JSON = 1,
  FormData = 2
}

// 参数类型声明
interface ParamsType  {
  [propName: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private message: NzMessageService,
    private httpClient: HttpClient
  ) { }

  /**
   * 网络请求异常处理函数
   * @param error| HttpErrorResponse
   */
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

  /**
   * Post 请求参数处理成 FormData 函数
   * @param _params|any
   */
  private toFormData(_params: any): FormData {
    if (!_params) {
      return new FormData();
    }
    if (_params.constructor === FormData) {
      return _params;
    }
    const formData = new FormData();
    for (const key in _params) {
      if (_params.hasOwnProperty(key)) {
        formData.append(key, _params[key]);
      }
    }
    return formData;
  }

  /**
   * GET 请求
   * @param _url|string API接口地址
   * @param _params|ParamsType 参数对象
   */
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

  /**
   * 请求主体可以为 urlencoding、JSON、FormData 的 POST 请求
   * @param _url|string API接口地址 
   * @param _params|ParamsType 参数对象 
   * @param contentType|ContentType Post请求body编码格式 
   */
  Post(_url: string, _params: ParamsType, contentType: PostContentType): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=UTF-8'
      })
    };
    let params;
    const URL = environment.baseURL + _url;
    switch (contentType) {
      case 0:
        params = new HttpParams({
          fromObject: _params
        });
        httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        break;
      case 1:
        params = _params;
        break;
      case 2:
        params = this.toFormData(_params);
        httpOptions.headers = httpOptions.headers.set('Content-Type', 'multipart/form-data');
        break;
    }
    const messageID = this.message.loading('添加中...', { nzDuration: 0 }).messageId;
    return this.httpClient.post(URL, params, httpOptions).pipe(
      map((res: HttpResponse) => {
        this.message.remove(messageID);
        if (res.code === StateCode.ok) {
          this.message.success(res.msg);
          return res;
        } else {
          this.message.error(res.msg);
        }
      }),
      catchError(this.handleError)
    );
  }

  /**
   * 请求主体为 JSON 的 PUT 请求
   * @param _url|string API接口地址
   * @param _params|ParamsType 参数对象
   */
  Put(_url: string, _params: ParamsType): Observable<any> {
    const URL = environment.baseURL + _url;
    const messageID = this.message.loading('更新中...', { nzDuration: 0 }).messageId;
    return this.httpClient.put(URL, _params, {

    }).pipe(
      map((res: HttpResponse) => {
        this.message.remove(messageID);
        if (res.code === StateCode.ok) {
          this.message.success(res.msg);
          return res;
        } else {
          this.message.error(res.msg);
        }
      }),
      catchError(this.handleError)
    );
  }

  /**
   * DELETE 请求
   * @param _url|string API接口地址 
   * @param _params|ParamsType 参数对象 
   */
  Delete(_url: string, _params: ParamsType): Observable<any> {
    const URL = environment.baseURL + _url;
    const params = new HttpParams({
      fromObject: _params
    });
    const messageID = this.message.loading('删除中...', { nzDuration: 0 }).messageId;
    return this.httpClient.put(URL, {
      params
    }).pipe(
      map((res: HttpResponse) => {
        this.message.remove(messageID);
        if (res.code === StateCode.ok) {
          this.message.success(res.msg);
          return res;
        } else {
          this.message.error(res.msg);
        }
      }),
      catchError(this.handleError)
    );
  }
}
