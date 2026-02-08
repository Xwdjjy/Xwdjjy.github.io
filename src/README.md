# 📋 索引系统 (Index System)

索引系统现已完全独立到 `src` 目录，包括所有配置文件、脚本和文档。

## 📁 目录结构

```
src/
├── index.html                    # 索引页面（主文件）
├── index.json                    # 📊 条目数据库（编辑此文件）
├── QUICK_REFERENCE.md            # ⚡ 快速参考
├── js/
│   └── index-manager.js          # ⚙️ 动态加载脚本
└── docs/
    ├── INDEX_GUIDE.md            # 📖 详细使用指南
    ├── WORKFLOW_DIAGRAM.md       # 🔄 工作流程图解
    ├── IMPLEMENTATION_SUMMARY.md # 📋 实现总结
    ├── COMPLETION_CHECKLIST.md   # ✅ 完成检查清单
    └── FILE_STRUCTURE.md         # 📁 文件结构说明
```

## 🚀 快速开始

### 1️⃣ 编辑条目数据

打开 `src/index.json`，在 `items` 数组中添加条目：

```json
{
  "id": 6,
  "title": "你的标题",
  "description": "简短描述...",
  "type": "posts",
  "url": "/your-url",
  "date": "2025-12-25",
  "tags": ["tag1"]
}
```

### 2️⃣ 推送到 GitHub

```bash
git add src/index.json
git commit -m "feat: 添加新条目"
git push origin main
```

### 3️⃣ 刷新网页

访问 https://Xwdjjy.github.io/src/index.html 并刷新 (Ctrl+F5)

## 📚 文档导航

| 文档 | 用途 | 时间 |
|------|------|------|
| **QUICK_REFERENCE.md** | 快速参考和常见错误排查 | 5分钟 |
| **docs/INDEX_GUIDE.md** | 详细使用指南和高级功能 | 20分钟 |
| **docs/WORKFLOW_DIAGRAM.md** | 系统架构和工作流程 | 15分钟 |
| **docs/IMPLEMENTATION_SUMMARY.md** | 实现总结和功能列表 | 10分钟 |
| **docs/COMPLETION_CHECKLIST.md** | 部署清单和故障排除 | 5分钟 |

## 🎯 核心文件

### `index.json` (条目数据库)
- 存储所有索引条目
- 支持多种条目类型：`posts`(文章)、`projects`(项目)、`docs`(文档)
- 包含 `items` 数组（条目列表）和 `recent` 数组（最近更新）

### `js/index-manager.js` (动态加载脚本)
- 从 `index.json` 读取数据
- 动态渲染 HTML 卡片
- 处理搜索、过滤、标签功能
- 绑定用户交互事件

### `index.html` (索引页面)
- 提供页面结构和样式
- 加载 `index-manager.js` 脚本
- 提供交互容器元素

## ✨ 功能特性

✅ **动态加载** - 从 JSON 读取条目，无需修改 HTML  
✅ **搜索功能** - 按标题、描述、标签搜索  
✅ **分类过滤** - 全部/文章/项目/文档  
✅ **标签系统** - 快速标签过滤  
✅ **最近更新** - 显示最新发布内容  
✅ **快捷键** - Ctrl/Cmd+K 打开搜索  
✅ **响应式设计** - 支持各种屏幕尺寸  
✅ **安全防护** - XSS 防护和安全链接  

## 🔗 关系说明

```
个人网站系统 (根目录)
    ↓
    └─ 索引系统 (src 目录)
        ├─ 索引页面 (index.html)
        ├─ 条目数据 (index.json)
        ├─ 脚本系统 (js/)
        ├─ 文档说明 (docs/)
        └─ 快速参考 (QUICK_REFERENCE.md)
```

## 📝 编辑建议

### 添加新条目

1. 打开 `src/index.json`
2. 找到 `items` 数组
3. 添加新条目对象
4. 确保 `id` 唯一、`type` 有效
5. 保存文件
6. git push 推送更改

### 更新最近动态

1. 打开 `src/index.json`
2. 找到 `recent` 数组
3. 添加或修改更新项
4. 保存文件
5. git push 推送更改

## 🐛 常见问题

**Q: 索引页面地址是什么？**  
A: https://Xwdjjy.github.io/src/index.html

**Q: 如何添加新条目？**  
A: 编辑 `src/index.json`，在 `items` 数组添加条目

**Q: 页面为什么不显示条目？**  
A: 检查 JSON 格式，刷新浏览器 (Ctrl+F5)

**Q: 搜索功能怎么用？**  
A: 按 Ctrl+K (Windows/Linux) 或 Cmd+K (Mac) 打开搜索框

**Q: 如何自定义类型或标签？**  
A: 查看 `docs/INDEX_GUIDE.md` 的高级用法部分

## 📖 详细文档

- 快速开始：QUICK_REFERENCE.md
- 使用指南：docs/INDEX_GUIDE.md
- 系统架构：docs/WORKFLOW_DIAGRAM.md
- 实现细节：docs/IMPLEMENTATION_SUMMARY.md
- 部署上线：docs/COMPLETION_CHECKLIST.md

## ✅ 系统独立性

索引系统现在完全独立在 `src` 目录中，与个人网站系统（根目录）完全分离：

- 📊 数据在 `src/index.json`
- ⚙️ 脚本在 `src/js/`
- 📚 文档在 `src/docs/`
- 🌐 页面在 `src/index.html`

这样的组织方式使得：
- ✅ 索引系统独立维护
- ✅ 网站系统和索引系统职责清晰
- ✅ 易于扩展和管理
- ✅ 版本控制更清晰

### 示例
```
{
      "id": 2,
      "title": "响应式作品集模板",
      "description": "轻量、可定制的作品集模板，包含项目卡片、滤镜与模态展示组件。",
      "type": "projects",
      "url": "/projects/portfolio-template",
      "meta": "模版",
      "tags": ["design", "template"]
    },
    {
      "id": 3,
      "title": "API 使用手册",
      "description": "列出常用端点与示例请求，帮助你快速集成第三方服务。",
      "type": "docs",
      "url": "/docs/api-guide",
      "meta": "v1.2",
      "tags": ["api", "documentation"]
    },
    {
      "id": 4,
      "title": "前端性能优化技巧",
      "description": "从资源加载到渲染优化，实用技巧与工具推荐，提升页面速度。",
      "type": "posts",
      "url": "/posts/performance-optimization",
      "meta": "性能",
      "tags": ["frontend", "performance", "dev"]
    },
    {
      "id": 5,
      "title": "可视化数据仪表盘",
      "description": "基于图表库与响应式布局的仪表盘示例，支持实时数据刷新。",
      "type": "projects",
      "url": "/projects/dashboard",
      "meta": "Dashboard",
      "tags": ["data", "visualization", "dev"]
    }
```
---

**最后更新**: 2026-02-08  
**版本**: 2.0.0  
**状态**: ✅ 独立完成
