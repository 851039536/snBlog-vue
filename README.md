# sn-blog 开发手册

## 后端开发

### 技术栈

- net5:api

- mysql

#### 缓存

jwt

quartz

数据加密

### 功能接口

#### 注释规则

```
 所有+分类:0|分类:1|标签:2|用户3
```

#### 路由定义

```csharp
    命名空间
    //默认的约定集将应用于程序集中的所有操作：
    [assembly: ApiConventionType(typeof(DefaultApiConventions))]
    namespace Snblog.Controllers

    [ApiExplorerSettings(GroupName = "V1")] //版本控制
    [ApiController]
    [Route("article")]

    接口http以小写短字符声明
    [HttpGet("sum")]
```

#### article

文章接口 API

##### 查询总数

```csharp
<param name="identity">所有:0|分类:1|标签:2|用户3</param>
<param name="type">条件</param>
<param name="cache">缓存</param>
<returns>int</returns>
GetSumAsync(int identity = 0, string type = "null", bool cache = false)
```

```
/article/sum?identity=0&type=null&cache=false
```

##### 模糊查询

```csharp
<param name="identity">所有:0|分类:1|标签:2|用户:3|标签+用户:4</param>
<param name="type">查询参数(多条件以','分割)</param>
<param name="name">查询字段</param>
<param name="cache">缓存</param>
<returns>list-entity</returns>
GetByIdAsync(int id, bool cache = false)
```

```
/article/contains?identity=0&type=null&name=c&cache=false
```

##### 主键查询

```csharp
<param name="id">主键</param>
<param name="cache">缓存</param>
<returns>entity</returns>
GetByIdAsync(int id, bool cache = false)
```

```
/article/byid?id=24&cache=false
```

##### 类别查询

```csharp
<param name="identity">分类:1|标签:2</param>
<param name="type">类别</param>
<param name="cache">缓存</param>
[HttpGet("type")]
```

```
/article/type?identity=1&type=2&cache=false
```

##### 分页查询

```csharp
<param name="identity">所有:0|分类:1|标签:2|用户:3|标签+用户:4</param>
<param name="type">查询参数(多条件以','分割)</param>
<param name="pageIndex">当前页码</param>
<param name="pageSize">每页记录条数</param>
<param name="isDesc">排序</param>
<param name="cache">缓存</param>
<param name="ordering">排序规则 data:时间|read:阅读|give:点赞|id:主键</param>
<returns>list-entity</returns>
GetPagingAsync(int identity = 0, string type = "null", int pageIndex = 1, int pageSize = 10, string ordering = "id", bool isDesc = true, bool cache = false)
```

```
/article/paging?identity=0&type=null&pageIndex=1&pageSize=10&ordering=id&isDesc=true&cache=false
```

##### 内容统计

```csharp
<param name="identity">所有:0|分类:1|标签:2|用户:3</param>
<param name="type">内容:1|阅读:2|点赞:3</param>
<param name="name">查询参数</param>
<param name="cache">缓存</param>
<returns>int</returns>
GetStrSumAsync(int identity = 0, int type = 1, string name = "null", bool cache = false)
```

```
/article/strSum?identity=0&type=1&name=null&cache=false
```

##### 新增

```csharp
<param name="entity">实体</param>
<returns>bool</returns>
[Authorize(Roles = Permissions.Name)]
AddAsync(Article entity)
```

```
/article/add
```

##### 更新

```csharp
<param name="entity">实体</param>
<returns>bool</returns>
[Authorize(Roles = Permissions.Name)]
[HttpPut("edit")]
UpdateAsync(Article entity)
```

```
/article/edit
```

##### 删除

```csharp
<param name="id">主键</param>
<returns>bool</returns>
[Authorize(Roles = Permissions.Name)]
[HttpDelete("del")]
DeleteAsync(int id)
```

```
/article/del?id=1
```

##### 条件更新

```csharp
<param name="entity">实体</param>
<param name="type">更新字段: Read | Give | Comment</param>
<returns>bool</returns>
[HttpPut("upPortion")]
UpdatePortionAsync(Article entity, string type)
```

```
/article/upPortion?type=Give
```

#### user

用户接口 API

##### 登录

```csharp
<param name="user">用户</param>
<param name="pwd">密码</param>
<returns>Nickname,token,id,name</returns>
[HttpGet("login")]
```

```
/user/login?user=1&pwd=2
```

##### 登录 2

```csharp
<param name="user">用户</param>
<param name="pwd">密码</param>
<returns>token</returns>
[HttpPost("login2")]
Login2(string user, string pwd)
```

```
/user/login2?user=1&pwd=2
```

##### 主键查询

```csharp
<param name="id">主键</param>
<param name="cache">缓存</param>
[HttpGet("byid")]
GetByIdAsync(int id = 0, bool cache = false)
```

```
/user/byid?id=2&cache=false
```

##### 模糊查询

#### snippet

##### 查询总数

```csharp
<param name="identity">所有:0|分类:1|标签:2|用户3</param>
<param name="type">条件:vue</param>
<param name="cache">缓存</param>
<returns>int</returns>
[HttpGet("sum")]
GetSumAsync(int identity = 0, string type = "null", bool cache = false)
```

```
/snippet/sum?identity=0&type=null&cache=false
```

##### 模糊查询

```csharp
<param name="identity">所有:0|分类:1|标签:2|用户名:3|内容:4</param>
<param name="type">查询参数(多条件以','分割)</param>
<param name="name">查询字段</param>
<param name="cache">缓存</param>
<returns>list-entity</returns>
[HttpGet("contains")]
GetContainsAsync(int identity = 0, string type = "null", string name = "c", bool cache = false)
```

```
/snippet/contains?identity=0&type=null&name=c&cache=false
```

##### 主键查询

```csharp
<param name="id">主键</param>
<param name="cache">缓存</param>
<returns>entity</returns>
[HttpGet("byid")]
GetByIdAsync(int id, bool cache = false)
```

```
/snippet/byid?id=1&cache=false
```

##### 内容统计

```csharp
<param name="identity">所有:0|分类:1|标签:2|用户账号:3</param>
<param name="name">查询参数</param>
<param name="cache">缓存</param>
<returns>int</returns>
[HttpGet("strSum")]
GetStrSumAsync(int identity = 0,  string name = "null", bool cache = false)
```

```
/snippet/strSum?identity=0&name=null&cache=false
```

##### 分页查询

```csharp
<param name="identity">所有:0|分类:1|标签:2|用户名:3</param>
<param name="type">查询参数(多条件以','分割)</param>
<param name="pageIndex">当前页码</param>
<param name="pageSize">每页记录条数</param>
<param name="isDesc">排序</param>
<param name="cache">缓存</param>
<returns>list-entity</returns>
[HttpGet("paging")]
GetPagingAsync(int identity = 0, string type = "null", int pageIndex = 1, int pageSize = 10,  bool isDesc = true, bool cache = false)
```

```
/snippet/paging?identity=0&type=null&pageIndex=1&pageSize=10&isDesc=true&cache=false
```

##### 新增

```csharp
<param name="entity">实体</param>
<returns>bool</returns>
[Authorize(Roles = Permissions.Name)]
[HttpPost("add")]
AddAsync(Snippet entity)
```

```
/snippet/add
```

##### 更新

```csharp
<param name="entity">实体</param>
<returns>bool</returns>
[Authorize(Roles = Permissions.Name)]
[HttpPut("edit")]
UpdateAsync(Snippet entity)
```

```
/snippet/edit
```

##### 删除

```
<param name="id">主键</param>
<returns>bool</returns>
[Authorize(Roles = Permissions.Name)]
[HttpDelete("del")]
DeleteAsync(int id)
```

```csharp
/snippet/del?id=1
```

##### 条件更新

```csharp
<param name="entity">实体</param>
<param name="type">更新字段: name | text</param>
<returns>bool</returns>
[HttpPut("upPortion")]
UpdatePortionAsync(Snippet entity, string type)
```

```
/snippet/upPortion?type=name%20
```

### 权限管理

### 缓存

#### 业务缓存

#### token 缓存

### 对象存储

## 开发日志

### 2022-xx-xx

#### 更新

- 更新后台列表内容居中显示

- 优化路由跳转都应该有 return 值

## 前端开发

### 技术栈

vue3

vuex

axios 异步通讯

前端组件库

第三方组件库

### 主页

### 博客详情页

### 分类详情

### 博客查询

### 导航类别

### Home

### 登录页面

### 个人信息

### 后台

## 开发需求

### 顶部

- 搜索框全局搜索

- SN blog 动态化

- 右侧图标(注册优化)

  ### 文档首页

- 增加选项,只看自己文档,查看所有文档

### 个人项目

github,gitee

图示

![image-20221109150340306](C:\Users\ch190006\AppData\Roaming\Typora\typora-user-images\image-20221109150340306.png)

### 个人介绍

![image-20221109152657337](C:\Users\ch190006\AppData\Roaming\Typora\typora-user-images\image-20221109152657337.png)

## 开发日志

### 2022-11-03

#### 更新

- 更新后台列表内容居中显示

- 优化路由跳转都应该有 return 值

### 2022-11-04

#### 更新

- 优化博客文档代码操作
- 更新主页 head 跳转后台操作

#### 新增

- 新增博客图片从 5 增至 14 张,新增文章随机选图
- 文档类别增加用户信息

### 2022-11-07

#### 更新

- 修复导入 svg 异常报错
- 优化 Favorite.vue 代码逻辑
- 优化博客网站导航代码逻辑
- 左侧边字体放大,代码逻辑优化
- 优化 nav 列表代码

#### 新增

- 主页侧边栏增加公告提示

#### 删除

- 删除 Favorite~~index.ts,data.ts~~文件
- 删除博客导航~~index.ts,data,ts~~文件
- 删除~~blogs~~文件所有内容
- 删除~~LSidebar.ts~~文件
- 删除 admin_nav 冗余代码

### 2022-11-08

#### 更新

- 优化 head,side 栏代码
- 更新用户导航设置只能查看自身内容
- 优化主页 side 侧边栏代码
- 优化文档详细页面代码,删除冗余字段
- 优化主页文档列表代码,删除冗余字段

#### 新增

- 新增主页导航动态化
- 新增用户自主添加导航内容

### 2022-11-09

#### 更新

- 优化主页顶部栏头像

![image-20221109165838724](C:\Users\ch190006\AppData\Roaming\Typora\typora-user-images\image-20221109165838724.png)

#### 新增

- 新增文档 md 表情支持

### 2022-11-11

#### 更新

- 新增 unocss 作为主页 css 开发框架
- 优化通告栏 vue 代码
- 优化站别统计插件
- 优化时间插件
- 更新 c-mdContent 及路径
- 更新 l-sidebar 及路径

### 2022-11-12

#### 更新

- 更新了 side 颜色对应新增
- 优化退出登录操作,取消直接导航至后台
- 放大顶部导航字体
- 优化通用页面名称及代码格式

#### 新增

- 新增前端便捷登录界面 c-login

### 2022-11-14

#### 更新

- 优化前端页面代码

- 更新 userApi 名称,及代码优化
- mysql 字段 snuser->更新 user

### 2022-11-22

#### 更新

- 优化 head 顶部栏显示

- 优化 side 侧边栏显示
- 修复过度动画抖动问题

### 2022-11-23

#### 新增

- 完善后台用户管理操作
- 新增更新删除修复用户操作

### 2022-11-24

#### 新增

- 新增 userAPI **Update,Del**
- 新增 c-modal-dialog.vue 提示框页面
- 新增 sql.vue 页面
- 新增 sidebar 侧边栏图标显示
- 新增 sql 路由
- 新增用户编辑页面
- 新增主页详情页分类信息显示

#### 删除

- 删除 windicss 相关框架
- 删除多余**TOKEN**()
- 删除 one 默认读取 api

#### 更新

- 优化进度条样式

- 优化 userModel 默认值

- 优化根据主键读取文档 api

- 优化 sidebar 侧边栏

- 修复日期格式化

- 优化用户列表内容

- 优化文档主页详细

- 优化侧边栏工具显示

  ### 2022-11-29

  #### 新增

  - 增加 snippetApi,snippetTagApi
  - 增加 snippetMode.ts,snippetTagMode.ts
  - 增加搜索高亮组件
  - 新增 c-sidebar 关于我界面提示
  - 新增代码片段 c-snippet.vue,snippetContent.vue

  #### 删除

  - 删除 app.vue **c-search**
  - 删除 main.ts 多余字符
  - 删除 c-login.vue
  - 删除 data.ts->hSearchValue

  #### 更新

  - 更新 IArticle title->name

  - 更新 article ->articleApi.ts

  - 优化 c-header.vue

  - 优化全局组件 c-modal-dialog

  - 更新主页搜素文章-全局组件

  - 更新路由导航信息

  - 优化 article 主键查询

  - 优化登录 login.vue 隐藏侧边
