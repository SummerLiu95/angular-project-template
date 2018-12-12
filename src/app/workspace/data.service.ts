import { Injectable } from '@angular/core';
import {HttpResponse, HttpService} from '../tool/service/http.service';
import { API } from '../tool/api';
import {Subject} from 'rxjs';
import {PlayersListType} from '../tool/type/types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  $playersList = new Subject<PlayersListType[]>();

  constructor(
    private http: HttpService
  ) { }

  getPlayer() {
    this.http.Get(`${API.players}`).subscribe((res: HttpResponse) => {
      console.log(res);
      this.$playersList.next(res.data);
    });
  }
}
