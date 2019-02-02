import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Crisis } from '../../shared/type/crisis-center';
import { EMPTY, Observable, of } from 'rxjs';
import { DataService } from '../../shared/service/data.service';
import { mergeMap, take } from 'rxjs/operators';

@Injectable()
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
    let id = route.paramMap.get('id');

    return this.dataService.getCrisis(id).pipe(
      take(1),
      mergeMap((crisis: Crisis) => {
        if (crisis) {
          return of(crisis);
        } else {
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
