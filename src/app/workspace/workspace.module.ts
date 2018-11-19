// Angular 核心模块导入
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 业务开发相关模块导入
import { WorkspaceRoutingModule } from './workspace-routing.module';
// 模块内组件、指令、管道等导入
import { WorkspaceComponent } from './workspace.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [WorkspaceComponent, LoginComponent, NotFoundComponent, MainComponent, MapComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule
  ],
  exports: [LoginComponent, NotFoundComponent]
})
export class WorkspaceModule { }
