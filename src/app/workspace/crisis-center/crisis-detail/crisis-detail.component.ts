import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../../../tool/can-deactivate.guard';
import { Observable } from 'rxjs';
import { Crisis } from '../../../tool/type/crisis-center';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '../../../tool/service/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit, CanComponentDeactivate {
  crisis: Crisis;
  editName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { crisis: Crisis}) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm();
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  private gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.activatedRoute });
  }
}
