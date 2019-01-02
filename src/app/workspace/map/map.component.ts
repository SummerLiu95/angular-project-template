import {Component, OnInit} from '@angular/core';
import {ContentType, HttpService} from '../../tool/service/http.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
  }

  
  addSomething(contentType: number) {
    const params = {
      name: '刘志宇',
      age: 2
    };
    switch (contentType) {
      case 0:
        this.http.Post('test/update', params, ContentType.default).subscribe();
        break;
      case 1:
        this.http.Post('test/update', params, ContentType.JSON).subscribe();
        break;
      case 2:
        this.http.Post('test/update', params, ContentType.FormData).subscribe();
        break;
    }
  }
}
