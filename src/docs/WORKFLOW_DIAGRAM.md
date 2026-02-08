# 🔄 工作流程与架构

## 系统架构

```
用户浏览器
    ↓
src/index.html
    ├─ 加载 src/js/index-manager.js
    └─ 提供容器元素 (#cards, #recent-list)
    ↓
index-manager.js 初始化
    ├─ Fetch src/index.json
    ├─ 解析 JSON 数据
    ├─ 渲染 HTML 卡片
    ├─ 绑定事件监听器
    └─ 提供搜索、过滤功能
    ↓
src/index.json
    ├─ items[] - 条目列表
    └─ recent[] - 最近更新
```

## 数据流向

### 添加新条目流程

```
编辑 src/index.json
    ↓
git add src/index.json
    ↓
git commit
    ↓
git push origin main
    ↓
GitHub 更新仓库
    ↓
GitHub Pages 自动发布
    ↓
用户刷新页面
    ↓
浏览器 Fetch src/index.json
    ↓
index-manager.js 解析数据
    ↓
动态生成 HTML
    ↓
用户看到新条目
```

## 搜索和过滤流程

```
用户输入或点击
    ↓
事件监听器触发
    ↓
获取搜索词和过滤类型
    ↓
调用 filterAndSearch()
    ↓
遍历所有条目：
  - 检查标题、描述、标签
  - 检查类型是否匹配
    ↓
收集匹配的条目
    ↓
调用 renderCards()
    ↓
生成新的 HTML
    ↓
插入到 DOM
    ↓
用户看到过滤结果
```

## 文件加载顺序

```
1. 浏览器加载 index.html
2. 解析 HTML（<head> 标签）
3. 加载 CSS 样式
4. 解析 <body> 内容
5. 加载 js/index-manager.js
6. DOMContentLoaded 事件触发
7. 创建 IndexManager 实例
8. 调用 init() 初始化
9. Fetch src/index.json
10. 解析 JSON
11. renderCards() 和 renderRecent()
12. attachEventListeners()
13. 用户可交互
```

## 性能考量

### 加载时间分解

```
HTML 解析: ~50ms
JS 加载: ~10ms
Fetch JSON: ~50-200ms (取决于网络)
JSON 解析: ~5ms
DOM 生成: ~20-50ms (取决于条目数量)
事件绑定: ~10ms
────────────────────
总计: ~200-400ms
```

### 缓存策略

- GitHub Pages 默认缓存: 10 分钟
- 浏览器缓存: 取决于用户设置
- 强制刷新: Ctrl+F5

## 事件处理流程

### 搜索事件

```
用户输入
    ↓
input 事件监听器
    ↓
currentSearch = 用户输入
    ↓
filterAndSearch()
    ↓
过滤条目
    ↓
renderCards()
```

### 过滤事件

```
用户点击过滤按钮
    ↓
click 事件监听器
    ↓
currentFilter = 选中类型
    ↓
移除其他按钮的 active 类
    ↓
添加当前按钮的 active 类
    ↓
filterAndSearch()
    ↓
过滤条目
    ↓
renderCards()
```

### 快捷键事件

```
用户按 Ctrl/Cmd+K
    ↓
keydown 事件监听器
    ↓
检查 ctrlKey || metaKey
    ↓
检查 key === 'k'
    ↓
e.preventDefault()
    ↓
input.focus()
    ↓
input.select()
    ↓
用户可输入搜索词
```

## 错误处理流程

```
初始化 IndexManager
    ↓
调用 init()
    ↓
发送 Fetch 请求
    ↓
┌─ 成功 ──────────────┐
│ response.ok = true  │
│ 解析 JSON           │
│ renderCards()       │
│ renderRecent()      │
│ attachEventListeners() │
└──────┬──────────────┘
       ↓
    ✅ 显示内容

┌─ 失败 ──────────────┐
│ response.ok = false │
│ 或 fetch 异常       │
│ console.error()     │
│ renderError()       │
└──────┬──────────────┘
       ↓
    ❌ 显示错误提示
```

## 数据结构

### JSON 格式

```json
{
  "items": [
    {
      "id": 1,
      "title": "string",
      "description": "string",
      "type": "posts|projects|docs",
      "url": "string",
      "date": "YYYY-MM-DD",  // 可选
      "meta": "string",      // 可选
      "tags": ["string"]     // 可选
    }
  ],
  "recent": [
    {
      "title": "string",
      "icon": "string",
      "time": "string",
      "url": "string"
    }
  ]
}
```

### DOM 结构

```html
<div id="cards">
  <article class="card" data-type="posts" data-title="标题">
    <h3>标题</h3>
    <p>描述</p>
    <div class="meta">类型 · 日期</div>
  </article>
</div>

<div id="recent-list">
  <a class="item" href="#">
    <div class="avatar">A</div>
    <div>
      <div>标题</div>
      <div>时间</div>
    </div>
  </a>
</div>
```

## 扩展建议

### 添加分页功能

```javascript
// 在 IndexManager 中添加
async paginate(page, perPage = 10) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paged = this.items.slice(start, end);
  this.renderCards(paged);
}
```

### 添加排序功能

```javascript
// 在 IndexManager 中添加
sort(field, ascending = false) {
  this.items.sort((a, b) => {
    if (ascending) return a[field] > b[field] ? 1 : -1;
    return a[field] < b[field] ? 1 : -1;
  });
  this.renderCards();
}
```

### 添加统计功能

```javascript
// 在 IndexManager 中添加
getStats() {
  const stats = {};
  this.items.forEach(item => {
    stats[item.type] = (stats[item.type] || 0) + 1;
  });
  return stats;
}
```

---

**最后更新**: 2026-02-08  
**版本**: 1.0.0
