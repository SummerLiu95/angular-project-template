import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';

import { environment } from '../../../environments/environment';
import { DataService } from '../data.service';
import { PlayersListItemType } from '../../tool/type/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public playersList: Array<PlayersListItemType>;

  constructor(
    private iconService: NzIconService,
    private dataService: DataService
  ) {
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_931245_uycqwbri2ef.js'
    });
    console.log(`environment.envName: ${environment.envName}`);
  }

  ngOnInit() {
    console.log(`environment.baseURL: ${environment.baseURL}`);
    this.dataService.getPlayer();
    this.dataService.$playersList.subscribe(data => {
      this.playersList = data.list;
    });
  }

}
