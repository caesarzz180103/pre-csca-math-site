# Pre-CSCA G11 数学知识训练站

这是一个本地静态网页项目，根据《预备 CSCA 数学知识清单 G11》整理。

## 内容

- 19 个知识模块
- 114 道练习题
- 每题包含题型定位、解题思路、详细步骤、答案和检查提醒
- 题型包括 CSCA-style、中国高考同难度改编、国际校入学考相近题
- 几何模块内置 SVG 教学配图，支持放大和打印

## 本地打开

直接双击 `index.html`，或在 macOS 终端运行：

```bash
open index.html
```

## GitHub Pages

这是纯静态 HTML/CSS/JS 项目，可以部署到 GitHub Pages。

注意：GitHub Pages 对私有仓库的支持取决于 GitHub 账号计划；如果只使用免费账号，通常建议把网页发布仓库设为 public，或者把仓库保持 private、只用于代码维护。

## 维护方式

主要内容在 `app.js`：

- `modules`：知识点、例题、基础题
- `extraExerciseBank`：强化题库
- `solutionGuideBank`：每个模块的解题思路和检查提醒

样式在 `styles.css`，页面结构在 `index.html`。
