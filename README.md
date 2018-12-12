# FrontEndProjectStandardDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.



## 项目目录说明

```
|-- app
    |-- app-routing.module.ts
    |-- app.component.html
    |-- app.component.scss
    |-- app.component.spec.ts
    |-- app.component.ts
    |-- app.module.ts
    |-- mock
    |   |-- index.ts
    |   |-- mock-data.ts
    |-- tool
    |   |-- tool.module.ts
    |   |-- animations
    |   |-- components
    |   |-- pipes
    |-- workspace
        |-- workspace-routing.module.ts
        |-- workspace.component.html
        |-- workspace.component.scss
        |-- workspace.component.spec.ts
        |-- workspace.component.ts
        |-- workspace.module.ts
        |-- login
        |   |-- login.component.html
        |   |-- login.component.scss
        |   |-- login.component.spec.ts
        |   |-- login.component.ts
        |-- main
        |   |-- main.component.html
        |   |-- main.component.scss
        |   |-- main.component.spec.ts
        |   |-- main.component.ts
        |-- map
        |   |-- map.component.html
        |   |-- map.component.scss
        |   |-- map.component.spec.ts
        |   |-- map.component.ts
        |-- not-found
            |-- not-found.component.html
            |-- not-found.component.scss
            |-- not-found.component.spec.ts
            |-- not-found.component.ts
```



如上图所示，项目源代码目录 `src/app` 下有个根模块 AppModule，同时该根模块还拥有两个子模块 ToolModule 工具模块和 WorkspaceModule 业务模块。其中 ToolModule 模块提供项目所需用到的自定义组件、动画、指令、管道等，同时需要注意的是将 ToolModule 的 `export` 属性将对应可声明对象（组件、指令、管道）声明出去，供项目业务模块 WorkspaceModule 使用。而 WorkspaceModule 业务模块主要根据业务功能添加页面组件等，其中业务模块中的登录模块，404模块的路由配置在根模块这一级别。在业务模块路由配置对应的业务功能组件路由。因此，业务模块路隶属于根模块路由。

而 `app/mock` 目录下则为开发过程中 mock 数据接口的相关文件：`index.ts` 以及 `mock-data.ts`。其中 `index.ts` 中编写项目所使用的第三方库 @delon/mock 的 mock 数据的逻辑代码，而 `mock-data.ts` 中则使用第三方库 mockjs 去编写对应接口返回的数据。具体可查看代码进行理解。



## 相关命令使用

```shell
# 使用 angular cli的 generate 命令生产组件、动画、指令......
npm run generate -- component tool/components/slidebar -m=tool --export

# 以生产环境配置文件进行本地运行
npm start -- --configuration=production

# 以预生产环境配置文件进行本地运行
npm start -- --configuration=staging
```



## Icon 资源使用

项目中如有需要用到 icon 的地方，可以使用 Ng-Zorro 自带 icon 或者通过 Ng-Zorro 使用自定义的 iconfont 图标库中的图表。具体使用方法可以参见 [Icon 图标|NG-ZORRO](https://ng.ant.design/components/icon/zh#components-icon-demo-custom)

## 环境配置文件

`src/environments` 文件夹下的环境配置文件分别为本地开发环境 `environment.ts`、预生产环境 `environment.staging.ts`、生产环境 `environment.prod.ts`。其中我们一般将本地开发环境的baseURL字段设为空，预生产环境的baseURL字段设为后端接口部署的机子，生产环境的baseURL字段则为相对路径。

例如在生产环境中，项目前后端同时部署于同一个服务器，此时的请求接口的地址全称为`http://<ip>:<port>/api/<接口路径>`。如果在预生产环境中，此时的请求接口的地址全称为`http://funhouse.barryliu1995.studio/api/<接口地址>`。如果是在本地开发环境中，此时的请求接口的地址全称为`<接口地址>`，此时是通过mock接口获取数据。

## Typscript 规范

1. 缩进使用两个空格的形式
2. 函数之间间隔一行



## SCSS规范

默认使用 BEM 规范，具体可查阅 [CSS — BEM 命名规范](https://juejin.im/post/5b925e616fb9a05cdd2ce70d)

## HTML 规范
在属性上，使用双引号，不要使用单引号；




## 命名规范

### 项目命名

全部采用小写方式，以划线分隔，例如：

* front-end-project-standard-demo（前端项目规范示例）
* big-data-analysis-platform（大数据分析平台）
* monitoring-platform（监控平台）



### 目录命名
全部采用小写，同时只用单英文词进行命名，如workspace、library、mock、pipes等



### 组件命名

组件文件夹命名以单个小写英文单词为主，例如 login、main、map 等。如果需要多个英文单词命名文件夹，则使用“-”连字，例如 not-found。

而组件命名则使用大驼峰命名风格，例如 WorkspaceModule、ToolModule、LoadingAnimation、LoginComponent、NumberPipe 等


### 变量命名
1. 'ID'在变量名中全大写
2. 'URL'在变量名中全大写
3. 'Android'在变量名中大写第一个字母
4. 'iOS'在变量名中小写第一个，大写后两个字母
5. 常量全大写，用下划线连接





