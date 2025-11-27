# SN Blog - Vue3 前端博客系统

基于 Vue3、Vite、TypeScript、Ant Design 和 Unocss 的前端博客项目。该系统提供完整的博客展示、管理和交互功能。

## 项目概览

项目版本：3.0.1-alpha.2  
项目描述：基于vue3的博客系统  
Repository：https://gitee.com/kaiouyang-sn/vite-blog-s.git  
Author：sn <843766158@qq.com>

---

## 核心技术栈

核心框架与库：
- Vue 3.4.27：现代化的 JavaScript 框架
- Vite 4.5.3：新一代前端构建工具
- TypeScript 4.8.2：增强型的 JavaScript 语言
- Vue Router 4.1.6：官方路由管理库
- Pinia 2.1.4：状态管理库

组件与样式：
- Ant Design Vue 3.2.20：企业级 UI 组件库
- Naive UI 2.38.2：Vue 3 组件库
- Unocss 0.54.1：原子化 CSS 引擎

编辑与富文本：
- md-editor-v3 4.15.6：Markdown 编辑器
- vue-dompurify-html 4.0.0：HTML 清理和渲染

工具与插件：
- Axios 0.27.2：HTTP 客户端库
- axios-retry 3.5.1：Axios 重试插件
- dayjs 1.11.7：日期时间库
- nprogress 0.2.0：页面加载进度条
- qrcode.vue 3.4.1：二维码生成
- v-code-diff 1.12.0：代码对比工具
- vue3-infinite-scroll-better 2.2.0：无限滚动
- vue3-lazy 1.0.0-alpha.1：图片懒加载

开发工具：
- ESLint 8.23.0：代码质量工具
- Prettier 2.5.0：代码格式化
- Stylelint 14.11.0：样式代码检查
- vue-tsc 1.6.4：Vue TypeScript 类型检查

---

## 快速开始

### 安装依赖

```bash
# 使用 yarn 安装依赖
yarn install

# 或使用 npm
npm install
```

### 开发模式

```bash
# 启动开发服务器（带 Host 支持）
yarn dev

# 默认访问地址：http://localhost:4001
# 开发服务器会自动在文件变化时进行热更新
```

### 生产构建

```bash
# 生产环境构建
yarn build:pro

# 开发环境构建（用于调试）
yarn build:dev

# 生产环境服务（预览构建结果）
yarn serve
```

### 代码质量

```bash
# 运行 ESLint 检查 TypeScript 和 Vue 文件
yarn lint:eslint

# 运行 Stylelint 检查并修复样式文件
yarn lint:stylelint

# 使用 Prettier 格式化所有代码文件
yarn prettier

# TypeScript 类型检查（不输出文件）
yarn tsc
```

### Git 提交

```bash
# 使用 Commitizen 规范化提交信息
yarn git
```

---

## 项目结构

```
src/
├── api/                          # API 接口层
│   ├── article/                  # 文章相关 API
│   │   ├── ArticleApi.ts         # 文章接口
│   │   ├── ArticleTagApi.ts      # 文章标签接口
│   │   └── ArticleTypeApi.ts     # 文章分类接口
│   ├── diary/                    # 日记相关 API
│   │   ├── DiaryApi.ts           # 日记接口
│   │   └── DiaryTypeApi.ts       # 日记分类接口
│   ├── snippet/                  # 代码片段相关 API
│   │   ├── SnippetAPI.ts         # 代码片段接口
│   │   ├── SnippetTagAPI.ts      # 片段标签接口
│   │   ├── SnippetTypeAPI.ts     # 片段分类接口
│   │   ├── SnippetTypeSubAPI.ts  # 片段分类子项接口
│   │   └── SnippetVersionAPI.ts  # 片段版本接口
│   ├── user/                     # 用户相关 API
│   │   └── UserApi.ts            # 用户接口
│   ├── http/                     # HTTP 通用功能
│   │   ├── axios.ts              # Axios 实例配置
│   │   ├── CommonApi.ts          # 通用接口
│   │   ├── InterfaceApi.ts       # 接口配置接口
│   │   ├── LeaveApi.ts           # 留言接口
│   │   ├── ListContentApi.ts     # 列表内容接口
│   │   ├── SetBlogApi.ts         # 博客设置接口
│   │   ├── SnippetLabelApi.ts    # 片段标签接口
│   │   ├── VideoApi.ts           # 视频接口
│   │   ├── funApi.ts             # 功能接口
│   │   └── pending.ts            # 请求队列管理
│   ├── model/                    # 数据模型
│   │   └── [多个模型文件]        # 各种数据类型定义
│   └── useApi.ts                 # API 组合使用
├── components/                   # 组件库
│   ├── base/                     # 基础组件
│   │   ├── BaseAspin.vue         # 加载动画组件
│   │   ├── BaseLogin.vue         # 登录组件
│   │   ├── BaseMsg.vue           # 消息提示组件
│   │   ├── BaseTime.vue          # 时间显示组件
│   │   └── BaseTop.vue           # 顶部栏组件
│   ├── the/                      # 布局组件
│   │   ├── TheHeader.vue         # 页头
│   │   ├── TheSidebar.vue        # 左侧栏
│   │   ├── TheFooter.vue         # 页脚
│   │   └── TheMdContent.vue      # Markdown 内容组件
│   ├── sidebar/                  # 右侧栏组件
│   │   ├── TheRightSidebar.vue   # 右侧栏主容器
│   │   ├── RightSidebarSearch.vue  # 搜索功能
│   │   ├── RightSidebarFastSend.vue # 快捷发送
│   │   └── [其他侧栏子组件]
│   ├── modal/                    # 模态框组件
│   │   ├── c-modal-dialog.vue    # 对话框
│   │   └── c-modal-search.vue    # 搜索框
│   └── MyHome.vue                # 首页组件
├── hooks/                        # Vue Hooks 组合
│   ├── http/                     # HTTP 相关 hooks
│   │   ├── useAxios.ts           # Axios hook
│   │   ├── useRequest.ts         # 请求 hook
│   │   └── [其他 HTTP hooks]
│   ├── useRouter.ts              # 路由 hook
│   ├── useStorage.ts             # 本地存储 hook
│   ├── useUserInfo.ts            # 用户信息 hook
│   ├── useMomentTime.ts          # 时间处理 hook
│   └── [其他 hooks]
├── router/                       # 路由配置
│   ├── index.ts                  # 路由主文件
│   └── routerInfo.ts             # 路由信息配置
├── store/                        # Pinia 状态管理
│   ├── modules/
│   │   ├── user.ts               # 用户状态
│   │   ├── themeSetting.ts       # 主题设置状态
│   │   └── uiSettings.ts         # UI 设置状态
│   └── index.ts                  # 存储实例
├── views/                        # 页面视图
│   ├── page/                     # 公开页面
│   │   ├── article/              # 文章页面
│   │   ├── diary/                # 日记页面
│   │   ├── video/                # 视频页面
│   │   ├── photo/                # 相册页面
│   │   ├── navigation/           # 导航页面
│   │   └── snippet/              # 代码片段页面
│   └── admin/                    # 后台管理页面
│       ├── login/                # 登录页面
│       ├── article/              # 文章管理
│       ├── navigation/           # 导航管理
│       ├── user/                 # 用户管理
│       ├── snippet/              # 代码片段管理
│       ├── set/                  # 网站设置
│       └── sql/                  # 数据库管理
├── design/                       # 设计与样式
│   └── common.scss               # 公共样式
├── libs/                         # 工具库
│   └── rem.js                    # REM 单位配置
├── App.vue                       # 根组件
├── main.ts                       # 应用入口
└── env.d.ts                      # 环境声明文件
```

---

## 核心功能模块

### 1. 首页（Home）

功能特性：
- 展示个人博客文章列表
- 支持多维度排序（热门、最新、热度）
- 文章详情展示
- 动态右侧栏：
  - 文章搜索
  - 快捷操作
  - 网站公告
  - 工具栏
  - 站点统计

路由：`/`

### 2. 博客管理

功能特性：
- 文章展示（`/article`）
  - 分栏视图（`/article/column`）
  - 内容展示（`/article/content`）
- 文章搜索（`/qarticle`）
- 文章管理后台（`/Admin-index/ArticleTable`）
  - 文章新增（`/Admin-index/ArticleAdd`）
  - 文章编辑（`/Admin-index/ArticleEdit`）
  - 分类管理（`/Admin-index/ArticleTypeTable`）
  - 标签管理（`/Admin-index/ArticleTagTable`）

### 3. 日记管理

功能特性：
- 日记列表展示（`/diary`）
- 日记编辑与管理

路由：`/diary`

### 4. 视频管理

功能特性：
- 视频列表展示（`/video`）
- 视频播放（`/VideoPlay`）

路由：`/video`

### 5. 代码片段（Snippet）

功能特性：
- 片段列表展示（`/snippet`）
- 片段版本管理
- 标签分类
- 片段搜索
- 后台管理（`/Admin-index/snippetTable`）

API 接口：
- `SnippetAPI` - 片段主接口
- `SnippetTagAPI` - 标签接口
- `SnippetTypeAPI` - 分类接口
- `SnippetVersionAPI` - 版本接口

### 6. 网站导航

功能特性：
- 博客圈展示（`/BlogCircles`）
- 网站收藏（`/favorite`）
- 导航管理后台（`/Admin-index/NavTable`）
  - 导航新增（`/Admin-index/NavAdd`）
  - 导航编辑（`/Admin-index/NavEdit`）

### 7. 其他功能

- 相册管理（`/Photo`）
- 图书管理（`/book`）
- 列表内容（`/ListContent`）
- 用户管理后台（`/Admin-index/userTable`）
- 网站设置（`/Admin-index/PageSet`）
- 数据库备份（`/Admin-index/SqlBackups`）

---

## API 接口使用

### 基础配置

API 的基础地址通过环境变量 `VITE_API_DOMAIN` 配置，在 `.env` 文件中设置。

### 使用 API

在 Vue 组件中使用 API：

```typescript
import { useApi } from '@/api/useApi'

const { ArticleApi, UserApi } = useApi()

// 获取文章列表
const articles = await ArticleApi.getArticles()

// 获取用户信息
const userInfo = await UserApi.getUserInfo()
```

### Axios 配置

```typescript
// Axios 实例配置位置：src/api/http/axios.ts

// 默认超时：8000ms
// 自动重试：3 次（请求失败时）
// 重试间隔：300ms
// CORS：已启用
```

### 请求拦截器

- 自动添加 Authorization 令牌（从本地存储获取）
- 支持 loading 状态管理
- 自动取消重复请求
- 请求序列化处理（POST/PUT/DELETE）

### 响应拦截器

- 统一状态码检查
- 错误信息提示
- 401 错误自动重定向到登录页
- 加载状态管理

---

## 状态管理（Pinia）

### 用户状态（user.ts）

管理用户相关信息和登录状态

### UI 设置（uiSettings.ts）

管理网站 UI 界面统一设置

### 主题设置（themeSetting.ts）

管理网站主题和样式设置

### 持久化

Pinia 已配置持久化插件（`pinia-plugin-persistedstate`），状态会自动保存到本地存储。

---

## 路由系统

### 路由守卫

1. 前置守卫（beforeEach）
  - 启动加载进度条
  - 检查后台页面访问权限（需登录）
  - 已登录用户访问登录页自动重定向

2. 后置守卫（afterEach）
  - 完成加载进度条

### 路由模式

使用 HTML5 History 模式（`createWebHistory`）

### 路由懒加载

所有页面组件都使用动态导入（import()）实现懒加载，提高初始加载速度。

### KeepAlive 配置

- Home 页面：启用 keepAlive
- Article 栏视图：启用 keepAlive
- Article 内容视图：禁用 keepAlive
- 其他动态页面：禁用 keepAlive

---

## 样式与 CSS

### 原子化 CSS（Unocss）

项目使用 Unocss 进行原子化样式管理：

```typescript
// uno.config.ts 配置
// 支持预设：
// - @unocss/preset-uno - 基础预设
// - @unocss/preset-wind - Tailwind CSS 兼容
// - @unocss/preset-attributify - 属性化模式
// - @unocss/preset-icons - Icon 支持
```

### 全局样式

- 公共样式：`src/design/common.scss`
- 自动导入到所有 SCSS 文件
- 支持样式变量和混入（mixin）

### 样式预处理

- SCSS：支持变量、嵌套、混入等
- Less：支持类似功能
- PostCSS：自动添加浏览器前缀

---

## 开发指南

### 组件开发

1. 基础组件放在 `src/components/base/` 目录
2. 页面布局组件放在 `src/components/the/` 目录
3. 使用 TypeScript 编写，添加类型注解
4. 组件自动导入（unplugin-vue-components）

### Hooks 开发

1. 组合式 API hooks 放在 `src/hooks/` 目录
2. 遵循 `use` 前缀命名规范
3. HTTP 相关 hooks 放在 `src/hooks/http/` 目录
4. Hooks 自动导入（unplugin-auto-import）

### 新增 API 接口

1. 在 `src/api/` 下创建对应的目录和文件
2. 定义 API 类并导出
3. 在 `src/api/useApi.ts` 中引入并导出
4. 在组件中通过 `useApi()` 使用

### 路由配置

1. 所有路由配置在 `src/router/index.ts`
2. 使用动态导入（import()）实现路由懒加载
3. 添加必要的 meta 配置（keepAlive 等）
4. 遵循路由命名规范

---

## 自定义指令

项目提供全局自定义指令，位置：`src/hooks/directive/directive.ts`

使用方法：

```vue
<template>
  <!-- 使用自定义指令 -->
  <div v-custom-directive>
    内容
  </div>
</template>
```

---

## 工具函数

### 本地存储（useStorage）

```typescript
const { storage } = useStorage()

// 获取值
const token = storage.get('token')

// 设置值
storage.set('token', 'xxx')

// 删除值
storage.remove('token')
```

### 用户信息（useUserInfo）

```typescript
const { isUserLogin, removeUserStorage } = useUserInfo()

// 检查是否登录
if (isUserLogin()) {
  // 已登录逻辑
}

// 清除用户信息
removeUserStorage()
```

### 时间处理（useMomentTime）

使用 dayjs 库进行时间处理和格式化

---

## 环境变量

项目支持多环境配置，在项目根目录创建 `.env` 文件：

```env
# API 服务地址
VITE_API_DOMAIN=http://localhost:8088

# 其他环境变量
```

在代码中访问：

```typescript
const apiUrl = import.meta.env.VITE_API_DOMAIN
```

---

## 部署

### Docker 部署

项目包含 Dockerfile 和 docker-compose.yml 配置文件。

```bash
# 构建 Docker 镜像
docker build -t sn-blog:latest .

# 使用 docker-compose 启动
docker-compose up -d
```

### Nginx 配置

项目包含 nginx.conf 配置文件，支持反向代理和静态文件托管。

### 构建输出

- 输出目录：`dist/`
- 包含 Gzip 压缩（`.gz` 文件）
- 代码压缩和混淆已启用
- 生成 vendor 代码分割

---

## 文件别名

Vite 已配置以下路径别名：

```typescript
@        -> src/
@components -> src/components/
@views   -> src/views/
@api     -> src/api/
@hooks   -> src/hooks/
@hooksHttp -> src/hooks/http/
@assets  -> src/assets/
@store   -> src/store/
@router  -> src/router/
```

使用别名导入：

```typescript
import { useApi } from '@/api/useApi'
import MyHome from '@components/MyHome.vue'
import ArticleTable from '@views/admin/article/ArticleTable.vue'
```

---

## 常见问题

### Q: 如何修改 API 地址？

A: 编辑根目录的 `.env` 文件，修改 `VITE_API_DOMAIN` 变量。

### Q: 如何增加新的页面？

A: 
1. 在 `src/views/page/` 或 `src/views/admin/` 下创建对应目录
2. 创建 Vue 组件文件
3. 在 `src/router/index.ts` 中添加路由配置
4. 使用动态导入实现懒加载

### Q: 如何使用 Pinia 状态管理？

A:
```typescript
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
```

### Q: 如何添加自定义指令？

A: 在 `src/hooks/directive/directive.ts` 中定义，然后在 `main.ts` 中注册。

### Q: 如何处理跨域请求？

A: CORS 在 Axios 配置中已启用，同时支持代理配置（见 vite.config.ts）。

---

## 许可证

MIT License

---

## 联系方式

Author：sn <843766158@qq.com>  
Repository：https://gitee.com/kaiouyang-sn/vite-blog-s.git