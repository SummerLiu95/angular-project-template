import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './workspace/not-found/not-found.component';
import { ComposeMessageComponent } from './workspace/compose-message/compose-message.component';
import { AuthGuard } from './workspace/auth/auth.guard';
import { SelectivePreloadingStrategyService } from './shared/service/selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: './workspace/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: './workspace/crisis-center/crisis-center.module#CrisisCenterModule',
    data: {
      preload: true
    }
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: SelectivePreloadingStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
