# 快速参考

## 添加新条目的 4 步流程

### Step 1: 打开 `index.json`
位置：`src/index.json`

### Step 2: 在 `items` 数组中添加条目

```json
{
  "id": 6,
  "title": "你的标题",
  "description": "简短描述...",
  "type": "posts",    // posts | projects | docs
  "url": "/your-url",
  "date": "2025-12-25",
  "tags": ["tag1", "tag2"]
}
```

### Step 3: 保存并提交

```bash
git add src/index.json
git commit -m "feat: 添加新条目 - 你的标题"
git push origin main
```

### Step 4: 刷新页面

访问 https://Xwdjjy.github.io/src/index.html 并刷新

---

## 字段对照表

| 字段 | 示例 | 说明 |
|------|------|------|
| `id` | `6` | 唯一ID，不重复 |
| `title` | `"React 优化技巧"` | 条目标题 |
| `description` | `"深入学习..."` | 简要描述 |
| `type` | `"posts"` | 必须是：posts/projects/docs |
| `url` | `"/blog/post-1"` | 跳转链接 |
| `date` | `"2025-12-25"` | 可选，格式 YYYY-MM-DD |
| `meta` | `"v2.0"` | 可选，额外信息 |
| `tags` | `["react"]` | 可选，搜索标签 |

---

## 类型对应关系

| type | 图标 | 显示名称 |
|------|------|---------|
| `posts` | 📝 | 文章 |
| `projects` | 🚀 | 项目 |
| `docs` | 📚 | 文档 |

---

## 更新最近动态

编辑 `recent` 数组：

```json
"recent": [
  {
    "title": "发布新文章：你的标题",
    "icon": "A",           // 单个字符
    "time": "刚刚",       // 时间描述
    "url": "/blog/post-1"
  }
]
```

---

## 常见错误排查

❌ 页面不更新
- [ ] JSON 格式正确吗？（用 [JSONLint](https://jsonlint.com/) 验证）
- [ ] 已推送到 GitHub？
- [ ] 刷新页面（Ctrl+F5）？

❌ 条目不显示
- [ ] 所有必需字段都填了吗？
- [ ] `type` 是有效的吗？（posts/projects/docs）
- [ ] `id` 没有重复吗？

❌ 搜索不工作
- [ ] 确保 `tags` 字段使用小写字母
- [ ] 标题和描述不能为空

---

## 📚 更多资源

有问题？查看详细指南：
- 详细指南：[INDEX_GUIDE.md](./docs/INDEX_GUIDE.md)
- 工作流程：[WORKFLOW_DIAGRAM.md](./docs/WORKFLOW_DIAGRAM.md)
- 完成清单：[COMPLETION_CHECKLIST.md](./docs/COMPLETION_CHECKLIST.md)
- 系统说明：[README.md](./README.md)
