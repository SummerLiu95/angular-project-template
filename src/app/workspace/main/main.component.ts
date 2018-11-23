import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private iconService: NzIconService
  ) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_931245_uycqwbri2ef.js'
    });
  }

  ngOnInit() {
  }

}
