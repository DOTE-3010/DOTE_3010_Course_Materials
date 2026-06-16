# Pitch Page Subpages TODO

## 目标

将 `index.html` 中 `contents-grid` 的四个外链卡片改造为：

`index.html` -> 对应宣传子页面 -> `Explore more` 链接 -> 对应 GitHub 页面

四个子页面需要延续当前 `index.html` 的视觉风格，并用于简要介绍每类课程材料的结构、用途和入口。

## 待办清单

### 1. 阅读材料并产出子页面方案

- [x] 阅读 Lectures / Slide Decks 对应仓库内容：<https://github.com/DOTE-3010/DOTE_3010_Course_Materials>
- [x] 阅读 Tutorials / Step-by-Step Guides 对应仓库内容：<https://github.com/DOTE-3010/AI_Learning_Assistant>
- [x] 阅读 Resources / Toolkits & Links 对应目录内容：<https://github.com/DOTE-3010/DOTE_3010_Course_Materials/tree/main/Tutorial>
- [x] 阅读 Templates / Project Scaffolding 对应仓库内容：<https://github.com/UbicusMyron/coding_agent_constitution>
- [x] 为四个 sub page 分别拟定页面大纲，包括：
  - 页面定位
  - 内容结构
  - 关键模块
  - `Explore more` 目标链接
  - 与首页卡片文案的衔接方式
- [x] 评估是否需要从当前单文件 `index.html` 改造成更成型的静态结构，例如：
  - `index.html`
  - `pages/*.html`
  - `assets/css/*.css`
  - `assets/js/*.js`
- [x] 输出改造方案，说明推荐目录结构、复用策略、页面路由和部署影响。
- [x] 等待审阅和确认后再进入实现阶段。

### 2. 制作四个宣传子页面

- [x] 按照已确认方案拆分或整理 HTML / CSS / JS 结构。
- [x] 制作 Lectures / Slide Decks 子页面。
- [x] 制作 Tutorials / Step-by-Step Guides 子页面。
- [x] 制作 Resources / Toolkits & Links 子页面。
- [x] 制作 Templates / Project Scaffolding 子页面。
- [x] 更新 `index.html` 中四张 `content-card` 的链接，使其指向对应子页面。
- [x] 在每个子页面中加入 `Explore more` 链接，指向原 GitHub 页面。
- [x] 保持多语言展示逻辑与首页一致。已补齐四个子页的英文 / 简中 / 繁中内容，并复用首页语言切换布局。
- [x] 保持视觉风格、动效节奏、排版层级与 `index.html` 一致。
- [x] 在桌面和移动视口检查页面布局、文字换行和链接状态。

### 3. 部署新版页面

- [x] 阅读并遵循 `network_settting.md` 中的部署流程。新版页面延续该文件中的服务器与 nginx root：`root@89.208.247.2:/usr/share/nginx/html`。
- [x] 按部署说明准备新版静态文件。新版从单文件扩展为 `index.html`、`assets/`、`pages/`。
- [x] 部署新版首页和四个子页面。
- [x] 验证线上首页到子页面、子页面到 GitHub 的完整跳转链路。
- [x] 记录最终访问地址和验证结果：<https://ai-empowered-business.xyz/>；首页、四个子页面、`assets/css/subpages.css`、`assets/js/site.js` 均返回 `200 OK`。
