# 📋 索引条目更新指南

## 概述

这个项目使用 `index.json` 文件来管理索引页面的所有条目。通过编辑这个文件并推送到 GitHub 仓库，索引页面会自动更新条目列表。

## 文件位置

```
Xwdjjy.github.io/
├── index.json              ← 编辑这个文件
├── src/
│   └── index.html          ← 索引页面
├── js/
│   └── index-manager.js    ← 加载和渲染条目的脚本
```

## 如何添加/更新条目

### 1. **编辑 `index.json` 文件**

打开 `index.json` 文件，在 `items` 数组中添加或修改条目：

```json
{
  "items": [
    {
      "id": 1,
      "title": "条目标题",
      "description": "条目描述，简要说明内容",
      "type": "posts",              // 类型: posts, projects, docs
      "url": "/path/to/page",       // 点击条目时的跳转链接
      "date": "2025-06-01",         // 可选：发布日期
      "meta": "标签或版本",         // 可选：额外信息
      "tags": ["tag1", "tag2"]      // 可选：搜索标签
    }
  ],
  "recent": [
    {
      "title": "更新标题",
      "icon": "A",                  // 单个字符头像
      "time": "3 天前",             // 时间描述
      "url": "/path/to/page"        // 链接
    }
  ]
}
```

### 2. **字段说明**

#### items 数组字段

| 字段 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `id` | number | ✓ | 条目唯一ID |
| `title` | string | ✓ | 条目标题 |
| `description` | string | ✓ | 条目描述 |
| `type` | string | ✓ | 类型：`posts`、`projects` 或 `docs` |
| `url` | string | ✓ | 点击时跳转的链接 |
| `date` | string | ✗ | 发布日期（YYYY-MM-DD格式） |
| `meta` | string | ✗ | 额外信息（如版本、分类等） |
| `tags` | array | ✗ | 搜索标签数组 |

#### recent 数组字段

| 字段 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `title` | string | ✓ | 更新标题 |
| `icon` | string | ✓ | 单个字符头像 |
| `time` | string | ✓ | 时间描述（如"3天前"） |
| `url` | string | ✓ | 点击时跳转的链接 |

### 3. **类型说明**

- **`posts`** (📝 文章) - 博客文章、教程等
- **`projects`** (🚀 项目) - 代码项目、作品集等
- **`docs`** (📚 文档) - API文档、使用指南等

### 4. **示例条目**

```json
{
  "id": 6,
  "title": "React 性能优化最佳实践",
  "description": "深入探讨React应用的性能瓶颈和优化策略，包括代码分割、懒加载等。",
  "type": "posts",
  "url": "/blog/react-optimization",
  "date": "2025-12-15",
  "tags": ["react", "performance", "frontend", "dev"]
}
```

## 工作流程

### 第一次设置

1. **复制仓库到本地**
```bash
git clone https://github.com/Xwdjjy/Xwdjjy.github.io.git
cd Xwdjjy.github.io
```

2. **编辑 `index.json`** - 添加你的条目

3. **提交并推送**
```bash
git add index.json
git commit -m "feat: 添加新条目"
git push origin main
```

### 日常更新

每当你想添加新条目时：

1. **编辑 `index.json`** 
   - 在 `items` 数组中添加新条目
   - 或在 `recent` 数组中添加最近更新

2. **推送到 GitHub**
```bash
git add index.json
git commit -m "feat: 添加新文章《标题》"
git push
```

3. **查看效果**
   - 访问 https://Xwdjjy.github.io/src/index.html
   - 刷新页面，新条目应该自动显示

## 功能特性

### 搜索

- 🔍 支持按标题、描述和标签搜索
- ⌨️ 快捷键 `Ctrl+K`（Windows/Linux）或 `Cmd+K`（Mac）打开搜索

### 过滤

点击筛选按钮快速查看特定类型：
- **全部** - 显示所有条目
- **文章** - 只显示 posts 类型
- **项目** - 只显示 projects 类型
- **文档** - 只显示 docs 类型

### 标签

点击快速标签按钮快速搜索相关内容：
- 设计
- 开发
- 指南

## 常见问题

### Q: 页面没有更新？
A: 
1. 确保 `index.json` 文件格式正确（可用 [JSON验证工具](https://jsonlint.com/) 检查）
2. 推送到 GitHub 后刷新页面（可能需要等待几秒）
3. 清除浏览器缓存（Ctrl+Shift+Delete）

### Q: 可以使用其他URL吗？
A: 可以！`url` 字段支持：
- 相对路径：`/posts/my-post`
- 绝对URL：`https://example.com/page`
- 锚点：`#section`

### Q: 如何显示带有特殊字符的标题？
A: JSON 中需要转义特殊字符：
```json
{
  "title": "学习 \"JavaScript\" 基础"  // 引号需要转义
}
```

### Q: 能删除条目吗？
A: 是的，只需从 `items` 数组中删除对应的对象，然后推送即可。

## 高级用法

### 按日期排序

虽然 `index.json` 中不强制排序，但建议按日期降序排列（最新的在最前）：

```json
{
  "id": 1,
  "title": "最新文章",
  "date": "2025-12-25"
},
{
  "id": 2,
  "title": "旧文章",
  "date": "2025-06-01"
}
```

### 添加自定义标签

编辑 `src/index.html` 中的快速标签按钮来自定义：

```html
<button data-tag="my-tag">自定义标签</button>
```

然后在条目的 `tags` 数组中使用 `my-tag`。

## 技术细节

### 动态加载机制

1. 页面加载时，`index-manager.js` 通过 `fetch` API 加载 `index.json`
2. 解析 JSON 数据并渲染卡片和最近更新列表
3. 添加搜索、过滤、标签等交互功能

### 性能

- 轻量级：只需一个 JSON 文件
- 无数据库：完全静态化
- 快速加载：文件大小通常 < 10KB
- 缓存友好：可配置 HTTP 缓存

### 安全

- XSS 防护：所有用户内容都经过 HTML 转义
- 外部链接：都使用 `target="_blank"` 和 `rel="noopener noreferrer"` 

## 支持

如有问题或建议，请在 GitHub 仓库提交 Issue：
https://github.com/Xwdjjy/Xwdjjy.github.io/issues

---

**最后更新**: 2026-02-08  
**版本**: 1.0.0
