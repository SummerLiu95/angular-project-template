import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../../shared/type/heroes';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../../../shared/service/data.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    /**
     * 通过路由参数的 Observable 对象对路由参数中的id字段持续订阅。
     * ActivateRoute 及其可观察对象都是由 Router 本身负责管理的。
     * Router 会在不再需要时销毁这个路由组件，而注入进去的 ActivateRoute 也随之销毁了。
     */
    this.hero$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataService.getHero(params.get('id')))
    );
  }

  gotoHeroes(hero: Hero): void {
    const heroID = hero ? hero.id : null;
    this.router.navigate(['/heroes', { id: heroID }]);
  }
}
