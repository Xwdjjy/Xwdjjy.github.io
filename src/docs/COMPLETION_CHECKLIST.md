# ✅ 部署和完成检查清单

## 部署前准备

- [x] 所有文件创建完成
- [x] 文件路径正确更新
- [x] JSON 格式验证
- [x] 代码注释完整

## 文件检查

### 核心文件
- [ ] `src/index.json` 存在且格式正确
- [ ] `src/index.html` 存在
- [ ] `src/js/index-manager.js` 存在
- [ ] `src/README.md` 存在

### 文档文件
- [ ] `src/QUICK_REFERENCE.md` 存在
- [ ] `src/docs/INDEX_GUIDE.md` 存在
- [ ] `src/docs/WORKFLOW_DIAGRAM.md` 存在
- [ ] `src/docs/START_HERE.md` 存在
- [ ] `src/docs/COMPLETION_CHECKLIST.md` 存在

## JSON 验证

```bash
# 验证 JSON 格式
node -e "console.log(JSON.stringify(require('./src/index.json'), null, 2))"

# 或访问在线工具
# https://jsonlint.com/
```

## 路径验证

- [ ] `src/index.html` 中的脚本引用：`./js/index-manager.js` ✓
- [ ] `src/js/index-manager.js` 中的数据路径：`./index.json` ✓
- [ ] 文档中的相对链接都正确

## 功能测试

### 页面加载
- [ ] 访问 https://Xwdjjy.github.io/src/index.html
- [ ] 页面正常显示
- [ ] 没有 404 错误
- [ ] 没有加载错误（F12 检查）

### 条目显示
- [ ] 卡片条目正确渲染
- [ ] 最近更新正确显示
- [ ] 类型图标正确显示

### 搜索功能
- [ ] 搜索框可输入
- [ ] 按 Ctrl+K (Windows) 或 Cmd+K (Mac) 打开搜索
- [ ] 输入内容时过滤条目
- [ ] 搜索结果正确

### 过滤功能
- [ ] 全部按钮有效
- [ ] 文章按钮有效
- [ ] 项目按钮有效
- [ ] 文档按钮有效

### 标签功能
- [ ] 快速标签按钮有效
- [ ] 点击标签后自动搜索

### 交互功能
- [ ] 点击卡片可以跳转（如果有有效 url）
- [ ] 点击最近更新可以跳转

## 浏览器兼容

- [ ] Chrome 最新版正常
- [ ] Firefox 最新版正常
- [ ] Safari 最新版正常
- [ ] Edge 最新版正常

## 移动设备测试

- [ ] 手机横屏显示正常
- [ ] 手机竖屏显示正常
- [ ] 触摸交互正常

## 性能检查

- [ ] 页面加载时间 < 1s
- [ ] 搜索响应 < 100ms
- [ ] 没有明显的卡顿

## 控制台检查

打开浏览器开发者工具 (F12)，检查 Console 标签：

- [ ] 没有错误信息
- [ ] 没有警告信息
- [ ] 有成功加载提示（如 ✅ 加载了 X 条条目）

## Git 提交

```bash
# 查看修改文件
git status

# 添加索引系统文件
git add src/

# 提交更改
git commit -m "refactor: 将索引系统移到 src 目录

- 移动 index.json 到 src/
- 移动 index-manager.js 到 src/js/
- 更新所有文件路径引用
- 创建 src/docs/ 文档目录
- 添加 src/README.md 系统说明

这样索引系统与个人网站系统完全分离。
索引相关文件现在完全位于 src 目录。
"

# 推送到 GitHub
git push origin main
```

## 部署后验证

部署后访问网站并检查：

- [ ] https://Xwdjjy.github.io/src/index.html 可以访问
- [ ] 页面显示正常
- [ ] 所有功能正常运行
- [ ] 没有跨域错误

## 常见问题排查

### 问题：页面找不到 (404)

**原因**: 文件路径不存在或引用错误

**解决**:
```bash
# 检查文件是否存在
ls -la src/index.json
ls -la src/js/index-manager.js

# 检查 git 状态
git status
```

### 问题：条目不显示

**原因**: JSON 格式错误或 Fetch 失败

**解决**:
1. 检查 JSON 格式（JSONLint）
2. 查看浏览器控制台错误
3. 检查网络请求 (F12 - Network)

### 问题：搜索不工作

**原因**: tags 字段缺失或错误

**解决**:
1. 确保条目有 `tags` 字段
2. 刷新页面
3. 查看控制台错误

### 问题：脚本加载失败

**原因**: 路径错误或 GitHub Pages 延迟

**解决**:
1. 检查 `index.html` 中的脚本路径
2. 等待 1-5 分钟让 GitHub Pages 更新
3. 清除浏览器缓存 (Ctrl+Shift+Delete)

## 验证清单模板

可以复制下面的清单到你的检查清单中：

```markdown
## 索引系统部署检查 (日期: 2026-02-08)

### 文件检查
- [x] src/index.json
- [x] src/index.html
- [x] src/js/index-manager.js
- [x] src/README.md
- [x] src/QUICK_REFERENCE.md
- [x] src/docs/INDEX_GUIDE.md
- [x] src/docs/WORKFLOW_DIAGRAM.md
- [x] src/docs/START_HERE.md

### 功能检查
- [ ] 页面加载正常
- [ ] 条目显示正确
- [ ] 搜索功能有效
- [ ] 过滤功能有效
- [ ] 标签功能有效
- [ ] 链接跳转正常

### 浏览器兼容
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

### 最终确认
- [ ] 所有检查通过
- [ ] 已 git push
- [ ] GitHub Pages 已发布
- [ ] 网站可正常访问
```

## 后续维护

### 定期检查

- 每月检查 JSON 文件格式
- 定期清理过期条目
- 监控错误日志

### 更新时检查

每次更新时都要验证：
1. JSON 格式正确
2. 路径引用正确
3. 新添加的内容显示正常
4. 搜索和过滤功能正常

---

**最后更新**: 2026-02-08  
**版本**: 1.0.0  
**状态**: ✅ 完成
