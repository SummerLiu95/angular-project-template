// Angular 核心模块导入
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 业务开发模块导入
import { AppRoutingModule } from './app-routing.module';
import { ToolModule } from './tool/tool.module';
import { WorkspaceModule } from './workspace/workspace.module';
// 模块内组件、指令、管道等导入
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToolModule,
    WorkspaceModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
