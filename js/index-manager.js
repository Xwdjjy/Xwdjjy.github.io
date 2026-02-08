/**
 * 条目管理系统 - 从 index.json 动态加载内容
 * 支持搜索、过滤和标签功能
 */

class IndexManager {
  constructor(configUrl = './index.json') {
    this.configUrl = configUrl;
    this.items = [];
    this.recentItems = [];
    this.currentFilter = 'all';
    this.currentSearch = '';
  }

  /**
   * 初始化：从 index.json 加载数据
   */
  async init() {
    try {
      console.log('📥 正在加载索引数据...');
      const response = await fetch(this.configUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      this.items = data.items || [];
      this.recentItems = data.recent || [];
      
      console.log(`✅ 加载了 ${this.items.length} 条条目和 ${this.recentItems.length} 条更新`);
      
      // 渲染页面
      this.renderCards();
      this.renderRecent();
      this.attachEventListeners();
      
    } catch (error) {
      console.error('❌ 加载索引数据失败:', error);
      this.renderError('加载索引失败，请刷新页面重试');
    }
  }

  /**
   * 渲染卡片条目
   */
  renderCards(items = this.items) {
    const cardsContainer = document.getElementById('cards');
    if (!cardsContainer) return;

    if (items.length === 0) {
      cardsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--muted);">未找到匹配的条目</p>';
      return;
    }

    cardsContainer.innerHTML = items.map(item => `
      <article class="card" data-type="${item.type}" data-title="${item.title}">
        <h3>${this.escapeHtml(item.title)}</h3>
        <p>${this.escapeHtml(item.description)}</p>
        <div class="meta">
          ${this.getTypeIcon(item.type)} 
          ${this.getTypeName(item.type)}
          ${item.date ? ` · ${item.date}` : ''}
          ${item.meta ? ` · ${item.meta}` : ''}
        </div>
      </article>
    `).join('');

    // 为卡片添加点击事件
    cardsContainer.querySelectorAll('.card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        const itemTitle = card.dataset.title;
        const item = this.items.find(i => i.title === itemTitle);
        if (item && item.url) {
          window.location.href = item.url;
        }
      });
    });
  }

  /**
   * 渲染最近更新
   */
  renderRecent() {
    const recentList = document.getElementById('recent-list');
    if (!recentList) return;

    if (this.recentItems.length === 0) {
      recentList.innerHTML = '<p style="color: var(--muted); font-size: 13px;">暂无更新</p>';
      return;
    }

    recentList.innerHTML = this.recentItems.map(item => `
      <a class="item" href="${item.url || '#'}" style="text-decoration: none; color: inherit;">
        <div class="avatar">${item.icon}</div>
        <div>
          <div style="font-weight:600">${this.escapeHtml(item.title)}</div>
          <div style="color:var(--muted);font-size:13px">${this.escapeHtml(item.time)}</div>
        </div>
      </a>
    `).join('');
  }

  /**
   * 应用搜索和过滤
   */
  filterAndSearch() {
    const q = this.currentSearch.toLowerCase();
    const filtered = this.items.filter(item => {
      const matchesQuery = !q || 
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(q)));
      
      const matchesFilter = this.currentFilter === 'all' || item.type === this.currentFilter;
      
      return matchesQuery && matchesFilter;
    });

    this.renderCards(filtered);
  }

  /**
   * 绑定事件监听器
   */
  attachEventListeners() {
    // 搜索输入
    const searchInput = document.getElementById('search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentSearch = e.target.value;
        this.filterAndSearch();
      });
    }

    // 过滤按钮
    const filterBtns = document.querySelectorAll('[data-filter]');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.filter;
        this.filterAndSearch();
      });
    });

    // 标签按钮
    const tagBtns = document.querySelectorAll('[data-tag]');
    tagBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        if (searchInput) {
          searchInput.value = tag;
          this.currentSearch = tag;
          this.filterAndSearch();
        }
      });
    });

    // 快捷键 Ctrl/Cmd+K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      }
    });

    // 设置全部为默认激活状态
    const allFilterBtn = document.querySelector('[data-filter="all"]');
    if (allFilterBtn) {
      allFilterBtn.classList.add('active');
    }
  }

  /**
   * 渲染错误信息
   */
  renderError(message) {
    const cardsContainer = document.getElementById('cards');
    if (cardsContainer) {
      cardsContainer.innerHTML = `<p style="grid-column: 1/-1; color: #ff6b6b;">${message}</p>`;
    }
  }

  /**
   * 获取类型对应的图标
   */
  getTypeIcon(type) {
    const icons = {
      posts: '📝',
      projects: '🚀',
      docs: '📚'
    };
    return icons[type] || '📄';
  }

  /**
   * 获取类型的显示名称
   */
  getTypeName(type) {
    const names = {
      posts: '文章',
      projects: '项目',
      docs: '文档'
    };
    return names[type] || '条目';
  }

  /**
   * HTML转义，防止XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  const manager = new IndexManager('./index.json');
  manager.init();
});
