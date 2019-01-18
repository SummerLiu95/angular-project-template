import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './workspace/not-found/not-found.component';
import { ComposeMessageComponent } from './workspace/compose-message/compose-message.component';
import { AuthGuard } from './workspace/auth/auth.guard';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
