import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public playersList: [];

  constructor(
    private iconService: NzIconService,
    private http: HttpClient
  ) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_931245_uycqwbri2ef.js'
    });
    console.log(environment.envName);
  }

  ngOnInit() {
    this.http.get('players').subscribe(res => {
      console.log(res);
      this.playersList = res['data'];
    });
  }

}
