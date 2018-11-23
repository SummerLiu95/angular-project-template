import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public mockResponse;

  constructor(
    private iconService: NzIconService,
    private http: HttpClient
  ) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_931245_uycqwbri2ef.js'
    });
  }

  ngOnInit() {
    this.http.get('players').subscribe(res => {
      console.log(res);
      this.mockResponse = res;
    });
  }

}
