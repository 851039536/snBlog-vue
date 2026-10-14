# AGENTS.md — AI 编码代理指南

本文件为 AI 编码代理（如 Claude Code、GitHub Copilot Agent 等）在本仓库中工作时提供指导。

## 项目简介

SN Blog —— 基于 Vue 3 + Vite + TypeScript 的个人博客系统前端项目。

- **技术栈**：Vue 3.4 / Vite 4.5 / TypeScript 4.8 / Pinia / Vue Router 4 / Ant Design Vue 3 / Naive UI / Unocss
- **包管理**：优先使用 `yarn`（也兼容 npm）

## 常用命令

```bash
yarn dev              # 启动开发服务器（--host，默认 http://localhost:4001）
yarn build:pro        # 生产环境构建
yarn build:dev        # 开发环境构建
yarn serve            # 以 production 模式启动 vite（预览）
yarn lint:eslint      # ESLint 检查 src/ 下的 .vue/.ts
yarn lint:stylelint   # Stylelint 检查并自动修复样式
yarn prettier         # Prettier 格式化
yarn tsc              # vue-tsc 类型检查（不输出文件）
yarn git              # git add . && git cz 规范化提交（commitizen + cz-customizable）
```

提交信息必须遵循 `.cz-config.js` 中定义的 Commitizen 规范。

## 目录结构要点

```
src/
├── api/          # 博客业务 API 层（article / diary / snippet / user / http / model）
│   └── useApi.ts # 统一出口：useApi() 返回各业务 API 类
├── api_core/     # 核心（用户/鉴权）API 层，独立后端服务（VITE_API_DOMAIN_CORE）
│   ├── http/     # axios 实例（axios.ts）、funApi.ts、UserApi.ts、pending.ts
│   └── useApi.ts # 出口：useApi() 返回 { UserApi }
├── components/   # base/（基础组件）、the/（布局）、sidebar/、modal/、vessel/、custom/
├── hooks/        # 组合式函数；http/ 下为 API hooks；http/axios/ 下为请求相关
├── router/       # index.ts（路由+守卫）、routerInfo.ts
├── store/        # Pinia：modules/user.ts、themeSetting.ts、uiSettings.ts
├── views/
│   ├── page/     # 公开页面（article、diary、video、photo、book、snippet、navigation...）
│   └── admin/    # 后台管理（article、navigation、user、snippet、set、sql、login）
├── design/       # 全局 SCSS
└── libs/         # 工具（rem.js）
```

## 编码约定

- **组件自动导入**：`unplugin-vue-components` + `unplugin-auto-import` 已启用，Vue API 与部分组件无需手动 import；但 hooks 若在 `tsconfig`/配置覆盖范围内才可自动导入，不确定时显式 import。
- **路径别名**（见 `vite.config.ts` / `tsconfig.json`）：
  - `@` → `src/`
  - `@components` / `@views` / `@api` / `@hooks` / `@hooksHttp` / `@assets` / `@store` / `@router`
- **样式**：SCSS 为主，Unocss 原子类为辅；公共样式在 `src/design/common.scss`（自动注入）。
- **命名**：组件 PascalCase 文件名（`Base*.vue`、`The*.vue`、`Article*.vue`）；hooks 以 `use` 开头。
- **API 开发流程**：
  1. 博客业务接口 → 在 `src/api/<domain>/` 下新建类，静态方法调用 `src/api/http/funApi.ts` 的 get/add/update/del，并在 `src/api/useApi.ts` 导出；
  2. 核心用户接口 → 在 `src/api_core/http/` 下，使用 `api_core` 自己的 axios 实例（指向 `VITE_API_DOMAIN_CORE`）。

## 双 API 层说明（重要）

项目存在两套并行的 API 层，**不要混用 axios 实例**：

| 层 | 目录 | 后端地址 | 用途 |
|---|---|---|---|
| 业务层 | `src/api/` | `VITE_API_DOMAIN`（默认 :5002） | 文章/日记/片段/视频等 |
| 核心层 | `src/api_core/` | `VITE_API_DOMAIN_CORE`（默认 :7012） | 用户登录/鉴权/用户管理 |

## 路由与权限

- 路由守卫在 `src/router/index.ts`：`/Admin-index/**` 需登录（`isUserLogin()`），已登录访问 `/Login` 会重定向到 `/Admin-index/ArticleTable`。
- 页面组件一律动态 import 实现懒加载。
- 新增页面：在 `src/views/page/` 或 `src/views/admin/` 建目录 → 在 `src/router/index.ts` 注册路由 → 需要 keepAlive 时配置 `meta.keepAlive`。

## 环境变量

配置在 `.env.development` / `.env.production`：

```env
VITE_API_DOMAIN=       # 业务 API 地址
VITE_API_DOMAIN_CORE=  # 核心（用户）API 地址
VITE_APP_NAME=
VITE_APP_DESCRIPTION=
```

## 构建与部署

- Docker：`Dockerfile` 基于 nginx:stable-alpine，**直接 COPY 已构建的 dist/**（镜像内不做构建），构建流程：先 `yarn build:pro`，再 `docker build`。
- `docker-compose.yml`：服务 `mynginx`，镜像 `sn_blogs:latest`，端口映射 `8090:80`，并挂载 `./dist`。
- 构建产物含 gzip 压缩（vite-plugin-compression）。

## 注意事项 / 已知坑

- `src/hooks/http/usePhotoGalleryApi .ts` 文件名末尾含空格，import 时必须保留（不建议模仿此命名）。
- `src/api_core/http/axios.ts` 中部分逻辑依赖 `ref()` 自动导入，重构时注意 `unplugin-auto-import` 配置。
- 修改 `src/api/` 或 `src/api_core/` 时务必同步更新对应 `useApi.ts` 出口文件。
- 401 响应会清除本地用户信息并跳转 `/Login`（两个 axios 实例均有此逻辑）。
- `dist/` 已提交在仓库中（Docker 依赖它），不要在构建流程假设 dist 是干净的。
