# 小梧的个人网站 | Xiaowu's Personal Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-在线-brightgreen)](https://Xwdjjy.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-Xwdjjy-blue?logo=github)](https://github.com/Xwdjjy)

欢迎来到我的个人网站！这是一个基于GitHub Pages搭建的个人展示网站。(v2.0.0)

## 📁 项目结构

```
Xwdjjy.github.io/
├── index.html                    # 主页
├── README.md                     # 网站说明（你在这里）
├── CNAME                         # 域名配置
├── css/                          # 样式文件
├── js/                           # 脚本文件
├── img/                          # 图片资源
│
└── src/                          # 索引系统 (独立)
    ├── index.html                # 索引页面
    ├── index.json                # 条目数据库
    ├── README.md                 # 索引系统说明
    ├── QUICK_REFERENCE.md        # 快速参考
    ├── js/
    │   └── index-manager.js      # 动态加载脚本
    └── docs/                     # 索引文档
        ├── INDEX_GUIDE.md
        ├── WORKFLOW_DIAGRAM.md
        ├── IMPLEMENTATION_SUMMARY.md
        └── COMPLETION_CHECKLIST.md
```

## 🌐 网站入口

### 主页
- **地址**: https://Xwdjjy.github.io
- **文件**: `index.html`
- **说明**: 个人网站主入口

### 索引系统
- **地址**: https://Xwdjjy.github.io/src/index.html
- **说明**: 内容索引和导航系统
- **文档**: `src/README.md`

## ✨ 特性

### 主网站
- 🎨 响应式布局
- 🌙 深色主题
- ✨ 动态效果

### 索引系统 (src/)
- � 动态条目加载
- 📝 搜索和过滤
- 🏷️ 标签系统
- 💾 JSON 数据驱动

## �🛠️ 技术栈

### 前端
- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- JavaScript (ES6+)
- jQuery (用于插件支持)
- Font Awesome 图标

### 部署
- GitHub Pages
- 静态网站
- CDN 加速

### 索引系统
- 原生 JavaScript (无依赖)
- JSON 数据格式
- 动态 DOM 操作

## 📚 快速开始

### 浏览网站
1. 访问主页: https://Xwdjjy.github.io
2. 访问索引: https://Xwdjjy.github.io/src/index.html

### 编辑索引内容
1. 打开 `src/index.json`
2. 在 `items` 数组添加条目
3. git push 推送更改
4. 刷新网页查看效果

**详细说明**: 查看 `src/README.md`

## 📖 文档

### 网站文档 (根目录)
本目录包含网站主体相关文件

### 索引系统文档 (src/)
- **快速开始**: `src/QUICK_REFERENCE.md` (5分钟)
- **详细指南**: `src/docs/INDEX_GUIDE.md` (20分钟)
- **系统说明**: `src/README.md`
- **工作流程**: `src/docs/WORKFLOW_DIAGRAM.md`
- **完整清单**: `src/docs/COMPLETION_CHECKLIST.md`

## 🔍 索引系统详解

索引系统是一个独立的条目管理系统，位于 `src` 目录。

### 功能特性
✅ 动态加载条目（从 JSON 读取）
✅ 搜索功能（标题、描述、标签）
✅ 分类过滤（全部/文章/项目/文档）
✅ 标签系统（快速过滤）
✅ 最近更新（显示最新发布）
✅ 快捷键支持（Ctrl/Cmd+K）
✅ 响应式设计（各种屏幕）
✅ XSS 防护（安全保障）

### 核心文件

| 文件 | 说明 |
|------|------|
| `src/index.json` | 条目数据库（编辑此文件） |
| `src/js/index-manager.js` | 动态加载脚本 |
| `src/index.html` | 索引页面 |
| `src/README.md` | 索引系统说明 |

### 3步快速添加条目

1. **编辑** `src/index.json`
2. **推送** `git push origin main`
3. **查看** 刷新网页 (Ctrl+F5)

详细说明: `src/QUICK_REFERENCE.md`