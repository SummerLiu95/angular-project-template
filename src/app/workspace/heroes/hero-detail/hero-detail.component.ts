import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../../tool/type/heroes';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../../../tool/service/data.service';

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
    this.hero$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataService.getHero(params.get('id')))
    );
  }

  gotoHeroes(hero: Hero) {
    const heroID = hero ? hero.id : null;
    this.router.navigate(['/heroes', { id: heroID}]);
  }
}
