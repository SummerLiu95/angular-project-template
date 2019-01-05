import { Injectable } from '@angular/core';
import { HttpResponseType, HttpService } from '../tool/service/http.service';
import { API } from '../tool/api';
import { Observable } from 'rxjs';
import { TableListResponseType } from '../tool/type/types';
import { HandleError, HttpErrorHandlerService } from '../tool/service/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  handleError: HandleError;

  constructor(
    private http: HttpService,
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createErrorHandler('DataService');
  }

  getPlayer(pageIndex: number, pageSize: number = 10): Observable<HttpResponseType<TableListResponseType>> {
    let params = {
      pageIndex,
      pageSize
    };
    return this.http.Get(`${API.players}`, params, '请求球员列表数据', {data: {list: []}});
  }
}
