# Pitch Page Subpage Plan

## 任务 1 结论

建议把当前页面从“单个首页直跳 GitHub”改成“静态多页面宣传站”：

```text
index.html
pages/
  lectures.html
  tutorials.html
  resources.html
  templates.html
assets/
  zelda-hyrule-ui/
    landing.css
    ...
  css/
    subpages.css
  js/
    site.js
```

不建议引入 Vite、React 或构建流程。这个 pitch page 当前是纯静态站，部署也是直接 `scp` 到 Nginx；新增四个静态 HTML 页面加共享 CSS / JS 就足够，风险最低，也最符合当前项目体量。

## 已阅读材料

- DOTE 3010 课程材料仓库：<https://github.com/DOTE-3010/DOTE_3010_Course_Materials>
- AI Learning Assistant 仓库：<https://github.com/DOTE-3010/AI_Learning_Assistant>
- DOTE 3010 Tutorial 目录：<https://github.com/DOTE-3010/DOTE_3010_Course_Materials/tree/main/Tutorial>
- Coding Agent Constitution 仓库：<https://github.com/UbicusMyron/coding_agent_constitution>
- 本地首页：[index.html](/Users/myron/Desktop/DOTE3010/DOTE_3010_Course_Materials/pitch_page/index.html)
- 本地部署说明：[network_settting.md](/Users/myron/Desktop/DOTE3010/DOTE_3010_Course_Materials/pitch_page/network_settting.md)

## 当前首页观察

- `index.html` 已经包含三语言内容结构：English / 简中 / 繁中。
- 页面实际视觉风格主要来自 `assets/zelda-hyrule-ui/landing.css`。
- `index.html` 里仍有一大段内嵌 `<style media="not all">`，目前不会生效。实现阶段建议移除或至少不再复制这段死样式。
- JS 功能很少：滚动 reveal 和语言切换。适合抽到 `assets/js/site.js`，供首页和四个子页复用。
- 四个 `content-card` 现在直接打开 GitHub，新结构应改为打开本地子页面。

## 子页面 1：Lectures / Slide Decks

### 建议文件

`pages/lectures.html`

### 页面定位

介绍 DOTE 3010 的课堂课件体系：它不是散装 PPT，而是按课程模块组织的“从商业问题到 AI 能力”的教学路线图。

### 读到的材料结构

课程材料仓库包含：

- `Module_0`：课程引入、AI 产品案例、Python basics。
- `Module_1`：Predictive AI，包括 cryptocurrency and predictive AI、machine learning guidance、cryptocurrency prediction case、数据集和图表。
- `Module_2`：Perceptive AI，包括 perception AI 课件、case study、AI-powered accounting agent、OCR / NLP demos。
- `Module_3`：Generative AI，包括三讲 PDF、Cursor rules setup、practical troubleshooting FAQ。

### 页面大纲

- Hero：`Slide Decks for AI-Empowered Business`
- Module map：用 4 个横向或网格模块展示 `Module_0` 到 `Module_3`。
- What students learn：预测式 AI、感知式 AI、生成式 AI，以及市场优先的产品视角。
- Classroom use：课件、案例、notebook、数据材料如何配合使用。
- Explore more：链接到 <https://github.com/DOTE-3010/DOTE_3010_Course_Materials>

### 与首页卡片衔接

首页卡片文案强调 “Conceptual frameworks and real-world business case studies”。子页应展开为“每个模块如何把概念框架、商业案例、练习材料连接起来”。

## 子页面 2：Tutorials / Step-by-Step Guides

### 建议文件

`pages/tutorials.html`

### 页面定位

介绍 AI Learning Assistant 作为课程 MVP 和手把手原型构建样例：学生可以看到一个本地优先、Docker 驱动、可生成学术 artifacts 的完整 AI 应用。

### 读到的材料结构

AI Learning Assistant 是一个 local-first academic artifact studio，支持：

- Homework Code：输出 `.py` 或 `.ipynb`。
- Essay：输出 `.html` 和 `.pdf`。
- Presentation Slides：输出 HTML deck 和 PDF。
- Dense Cheat Sheet：输出 `.html` 和 `.pdf`。

技术结构包括：

- FastAPI backend
- SQLite metadata
- Playwright / Chromium PDF rendering
- Vite frontend
- Electron desktop shell
- Docker Desktop launchers
- OpenAI-compatible / Qwen model provider
- 英文、简中、繁中界面

### 页面大纲

- Hero：`Step-by-Step Guides from Prompt to Working Artifact`
- Product walkthrough：输入任务、上传参考、选择 artifact type、生成预览和 PDF。
- Four artifact pipelines：code、essay、slides、cheat sheet。
- Local-first architecture：Docker、FastAPI、SQLite、Playwright、Vite、Electron，用简化架构图呈现。
- Why it matters for business students：不用先成为软件工程师，也能理解 AI 产品的端到端结构。
- Explore more：链接到 <https://github.com/DOTE-3010/AI_Learning_Assistant>

### 与首页卡片衔接

首页卡片写的是 “building AI prototypes without writing a single line of code”。子页应把它落到“一个完整 AI artifact workbench 是怎样从 prompt 到产物的”。

## 子页面 3：Resources / Toolkits & Links

### 建议文件

`pages/resources.html`

### 页面定位

介绍 Tutorial 目录里的练习包、notebook、PPT 和数据文件。这个子页不应只叫“链接合集”，更准确是“practice kits and datasets”。

### 读到的材料结构

`Tutorial` 目录包含：

- `Tutorial 1.ipynb`
- `Tutorial 1.pptx`
- `Tutorial 2.pptx`
- `homework1_students.ipynb`
- `bitcoin_daily.csv`
- `ethereum_daily.csv`

### 页面大纲

- Hero：`Practice Kits, Datasets, and Guided Exercises`
- Practice flow：先看 tutorial PPT，再打开 notebook，最后用数据完成 homework。
- Included materials：notebook、slide decks、student homework、BTC / ETH daily datasets。
- Use cases：预测任务练习、金融数据分析、课堂演示、课后作业。
- Explore more：链接到 <https://github.com/DOTE-3010/DOTE_3010_Course_Materials/tree/main/Tutorial>

### 与首页卡片衔接

首页卡片写的是 “Toolkits & Links”。子页应保留“资源入口”的感觉，但补足“这些资源如何进入学习路径”。

## 子页面 4：Templates / Project Scaffolding

### 建议文件

`pages/templates.html`

### 页面定位

介绍 Coding Agent Constitution：它是把模糊软件想法转成可复用项目治理文件的模板体系，适合非工程背景学生在做 AI 产品原型前建立清晰边界。

### 读到的材料结构

仓库包含：

- 多语言 README：English、简中、繁中。
- `constitution-skill/SKILL.md`
- `constitution-skill/references/`：rookie onboarding、question bank、compatibility、governance guide、anti-patterns、task sizing 等。
- `constitution-skill/assets/governance-templates/`：`SPEC.md`、`ARCH.md`、`RULES.md`、`TASK.md`、`AGENTS.md`、`CLAUDE.md`、Cursor / Claude rules 等模板。
- `constitution-skill/assets/examples/feedback-inbox/`：完整 worked example。
- `constitution-skill/scripts/check-governance.sh`：治理文件检查脚本。

### 页面大纲

- Hero：`Project Scaffolding for AI-Native Builders`
- Before coding：把模糊想法转成 SPEC、ARCH、RULES、CONTRACTS、TASKS。
- Cross-agent workflow：Codex、Cursor、Claude Code 如何共享项目上下文。
- Template library：治理模板、合同示例、worked example、检查脚本。
- Student value：帮助商科学生把商业需求写成 agents 和工程师都能执行的项目语言。
- Explore more：链接到 <https://github.com/UbicusMyron/coding_agent_constitution>

### 与首页卡片衔接

首页卡片写的是 “business requirements documents and technical specs”。子页应强调“从商业意图到可执行工程任务”的桥接作用。

## 推荐实现方案

### 1. 保留静态站，不引入构建工具

原因：

- 当前部署方式是静态文件直传 Nginx。
- 四个子页内容以展示为主，不需要应用状态管理。
- 现有语言切换和 reveal 动效可以用几十行原生 JS 复用。

### 2. 抽出共享 JS

新增：

```text
assets/js/site.js
```

包含：

- `.reveal` IntersectionObserver。
- `setLang(lang)`。
- 可选：将语言写入 `localStorage`，让首页和子页保持同一语言。
- 可选：根据当前页面高亮 nav。

### 3. 新增子页样式

新增：

```text
assets/css/subpages.css
```

只放子页新增结构，例如：

- `.subpage-hero`
- `.resource-map`
- `.module-timeline`
- `.artifact-grid`
- `.architecture-strip`
- `.explore-band`

共享视觉系统继续使用：

```html
<link rel="stylesheet" href="../assets/zelda-hyrule-ui/landing.css" />
<link rel="stylesheet" href="../assets/css/subpages.css" />
```

首页继续使用：

```html
<link rel="stylesheet" href="assets/zelda-hyrule-ui/landing.css" />
<script src="assets/js/site.js" defer></script>
```

### 4. 更新首页卡片链接

将四个 GitHub 外链改为本地页面：

```html
pages/lectures.html
pages/tutorials.html
pages/resources.html
pages/templates.html
```

保留 GitHub 入口在每个子页的 `Explore more` 按钮中。

### 5. 子页共用页面骨架

每个子页建议使用同一套骨架：

- Fixed header：logo 回首页，nav 指向首页 section 或当前资源页。
- Hero：标题、短说明、关键指标。
- Resource overview：3 到 4 个重点卡片。
- Structure / flow：材料结构或使用路径。
- Explore band：主按钮跳 GitHub，次按钮回首页资源区。
- Footer：与首页一致。

### 6. 多语言策略

延续当前结构：

```html
<span class="en">...</span>
<span class="zh-cn">...</span>
<span class="zh">...</span>
```

不建议引入 JSON i18n，因为页面总量很小，当前写法直观、可维护。

## 部署影响

`network_settting.md` 当前只写了上传单个 `index.html`：

```bash
scp /Users/myron/Desktop/DOTE3010/DOTE_3010_Course_Materials/index.html root@89.208.247.2:/usr/share/nginx/html/index.html
```

新版需要至少上传：

```bash
scp /Users/myron/Desktop/DOTE3010/DOTE_3010_Course_Materials/pitch_page/index.html root@89.208.247.2:/usr/share/nginx/html/index.html
scp -r /Users/myron/Desktop/DOTE3010/DOTE_3010_Course_Materials/pitch_page/pages root@89.208.247.2:/usr/share/nginx/html/
scp -r /Users/myron/Desktop/DOTE3010/DOTE_3010_Course_Materials/pitch_page/assets root@89.208.247.2:/usr/share/nginx/html/
```

实现阶段建议同步更新 `network_settting.md`，把部署路径从单文件变为静态目录上传，并在部署后验证：

- `/index.html`
- `/pages/lectures.html`
- `/pages/tutorials.html`
- `/pages/resources.html`
- `/pages/templates.html`
- 每个子页的 `Explore more` GitHub 外链

## 待确认点

- 是否接受上述文件名：`lectures.html`、`tutorials.html`、`resources.html`、`templates.html`。
- 是否允许实现阶段移除 `index.html` 中当前不会生效的 `<style media="not all">` 内嵌样式。
- 子页是否继续保持三语言完整文案，还是先完成英文 + 简中，繁中随后补齐。
