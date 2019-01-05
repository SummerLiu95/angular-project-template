import {Component, OnInit} from '@angular/core';
import {PostContentType, HttpService} from '../../tool/service/http.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  params = {
    name: '刘志宇',
    age: 2
  };

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
  }

  
  addSomething(contentType: number) {
    switch (contentType) {
      case 0:
        this.http.Post('test/update', this.params, PostContentType.default, '测试post urlencoding 请求', {}).subscribe();
        break;
      case 1:
        this.http.Post('test/update', this.params, PostContentType.JSON, '测试post json 请求', {}).subscribe();
        break;
      case 2:
        this.http.Post('test/update', this.params, PostContentType.FormData, '测试post formdata 请求', {}).subscribe();
        break;
    }
  }

  updateSomething() {
    this.http.Put('test/update', this.params, '测试异常的 PUT 请求', {}).subscribe();
  }

  deleteSomething() {
    this.http.Delete('test/update', this.params, '测试异常的 DELETE 请求', {}).subscribe();
  }

  getSomething() {
    this.http.Get('test/update', this.params, '测试异常的 GET 请求', {}).subscribe();
  }
}
