/**
 * 有郝物电商平台 - 核心JavaScript
 */

// ==================== 数据模拟 ====================

// 商品数据
const productsData = [
  {
    id: 1,
    name: '简约北欧风陶瓷水杯 家用办公茶杯',
    images: ['https://picsum.photos/400/400?random=1', 'https://picsum.photos/400/400?random=2'],
    originalPrice: 68,
    currentPrice: 39,
    stock: 156,
    sales: 2341,
    category: '家居日用',
    subCategory: '厨房用品',
    tags: ['特惠', '热销'],
    specs: [
      { name: '颜色', options: ['白色', '黑色', '灰色', '蓝色'] },
      { name: '容量', options: ['300ml', '500ml'] }
    ],
    description: '采用优质陶瓷材质，简约北欧设计风格，适合家用办公。',
    parameters: { '材质': '陶瓷', '产地': '景德镇', '尺寸': '8x10cm' },
    rating: 4.8,
    reviews: 523
  },
  {
    id: 2,
    name: '纯棉透气男士T恤 夏季休闲短袖',
    images: ['https://picsum.photos/400/400?random=3', 'https://picsum.photos/400/400?random=4'],
    originalPrice: 129,
    currentPrice: 79,
    stock: 89,
    sales: 1872,
    category: '服饰鞋包',
    subCategory: '男装',
    tags: ['新品'],
    specs: [
      { name: '颜色', options: ['白色', '黑色', '灰色'] },
      { name: '尺码', options: ['M', 'L', 'XL', 'XXL'] }
    ],
    description: '100%纯棉材质，透气舒适，夏季必备单品。',
    parameters: { '材质': '纯棉', '产地': '广东', '适用季节': '夏季' },
    rating: 4.6,
    reviews: 328
  },
  {
    id: 3,
    name: '无线蓝牙耳机 降噪运动跑步耳机',
    images: ['https://picsum.photos/400/400?random=5', 'https://picsum.photos/400/400?random=6'],
    originalPrice: 299,
    currentPrice: 159,
    stock: 234,
    sales: 4521,
    category: '数码配件',
    subCategory: '耳机',
    tags: ['特惠', '爆款'],
    specs: [
      { name: '颜色', options: ['黑色', '白色', '蓝色'] }
    ],
    description: '主动降噪技术，蓝牙5.0稳定连接，运动防水设计。',
    parameters: { '连接方式': '蓝牙5.0', '续航': '8小时', '防水等级': 'IPX5' },
    rating: 4.9,
    reviews: 1256
  },
  {
    id: 4,
    name: '日式收纳盒 多功能桌面整理盒',
    images: ['https://picsum.photos/400/400?random=7', 'https://picsum.photos/400/400?random=8'],
    originalPrice: 45,
    currentPrice: 29,
    stock: 567,
    sales: 3256,
    category: '家居日用',
    subCategory: '收纳整理',
    tags: ['热销'],
    specs: [
      { name: '规格', options: ['小号', '中号', '大号'] }
    ],
    description: '日式简约设计，多功能分隔，让桌面整洁有序。',
    parameters: { '材质': 'PP塑料', '尺寸': '20x15x10cm' },
    rating: 4.7,
    reviews: 892
  },
  {
    id: 5,
    name: '玻尿酸补水面膜 深层保湿修护',
    images: ['https://picsum.photos/400/400?random=9', 'https://picsum.photos/400/400?random=10'],
    originalPrice: 168,
    currentPrice: 99,
    stock: 0,
    sales: 8923,
    category: '美妆个护',
    subCategory: '面膜',
    tags: ['爆款'],
    specs: [
      { name: '规格', options: ['5片装', '10片装', '20片装'] }
    ],
    description: '高浓度玻尿酸精华，深层补水保湿，修护肌肤屏障。',
    parameters: { '规格': '25ml/片', '保质期': '3年', '适用肤质': '所有肤质' },
    rating: 4.8,
    reviews: 2341
  },
  {
    id: 6,
    name: '进口坚果礼盒 混合果仁零食',
    images: ['https://picsum.photos/400/400?random=11', 'https://picsum.photos/400/400?random=12'],
    originalPrice: 128,
    currentPrice: 88,
    stock: 5,
    sales: 1567,
    category: '食品零食',
    subCategory: '坚果',
    tags: ['新品', '立减40'],
    specs: [
      { name: '规格', options: ['500g', '1kg', '2kg礼盒'] }
    ],
    description: '精选进口坚果，原味烘焙，健康营养零食。',
    parameters: { '产地': '多国进口', '保质期': '12个月', '储存方式': '阴凉干燥' },
    rating: 4.6,
    reviews: 456
  },
  {
    id: 7,
    name: '运动跑鞋 透气网面跑步鞋',
    images: ['https://picsum.photos/400/400?random=13', 'https://picsum.photos/400/400?random=14'],
    originalPrice: 399,
    currentPrice: 259,
    stock: 78,
    sales: 2134,
    category: '运动户外',
    subCategory: '运动鞋',
    tags: ['特惠'],
    specs: [
      { name: '颜色', options: ['黑色', '白色', '灰蓝'] },
      { name: '尺码', options: ['39', '40', '41', '42', '43', '44'] }
    ],
    description: '轻量化设计，透气网面，缓震耐磨，适合跑步健身。',
    parameters: { '鞋面材质': '网布', '鞋底材质': 'EVA', '适用场景': '跑步/健身' },
    rating: 4.7,
    reviews: 678
  },
  {
    id: 8,
    name: '智能手表 心率监测运动手环',
    images: ['https://picsum.photos/400/400?random=15', 'https://picsum.photos/400/400?random=16'],
    originalPrice: 599,
    currentPrice: 399,
    stock: 123,
    sales: 987,
    category: '数码配件',
    subCategory: '智能穿戴',
    tags: ['新品'],
    specs: [
      { name: '颜色', options: ['黑色', '银色', '玫瑰金'] }
    ],
    description: '全天候心率监测，多种运动模式，IP68防水。',
    parameters: { '屏幕': '1.4英寸AMOLED', '续航': '14天', '防水': 'IP68' },
    rating: 4.5,
    reviews: 234
  },
  {
    id: 9,
    name: '护眼台灯 LED学习阅读灯',
    images: ['https://picsum.photos/400/400?random=17', 'https://picsum.photos/400/400?random=18'],
    originalPrice: 189,
    currentPrice: 129,
    stock: 345,
    sales: 1567,
    category: '家居日用',
    subCategory: '灯具',
    tags: ['热销'],
    specs: [
      { name: '颜色', options: ['白色', '黑色'] }
    ],
    description: '国AA级护眼，无蓝光危害，多档调光调色。',
    parameters: { '功率': '12W', '色温': '3000K-5000K', '显色指数': 'Ra95' },
    rating: 4.8,
    reviews: 423
  },
  {
    id: 10,
    name: '女士真皮手提包 百搭通勤包',
    images: ['https://picsum.photos/400/400?random=19', 'https://picsum.photos/400/400?random=20'],
    originalPrice: 459,
    currentPrice: 299,
    stock: 56,
    sales: 876,
    category: '服饰鞋包',
    subCategory: '箱包',
    tags: ['立减160'],
    specs: [
      { name: '颜色', options: ['黑色', '棕色', '米白色'] }
    ],
    description: '头层牛皮材质，简约大方，通勤约会百搭款。',
    parameters: { '材质': '头层牛皮', '尺寸': '28x22x12cm', '内部结构': '拉链暗袋/手机袋' },
    rating: 4.6,
    reviews: 189
  },
  {
    id: 11,
    name: '洗衣液薰衣草香型 家庭装',
    images: ['https://picsum.photos/400/400?random=21', 'https://picsum.photos/400/400?random=22'],
    originalPrice: 59,
    currentPrice: 39,
    stock: 890,
    sales: 5678,
    category: '家居日用',
    subCategory: '清洁用品',
    tags: ['热销'],
    specs: [
      { name: '规格', options: ['2kg', '4kg', '6kg'] }
    ],
    description: '深层洁净，温和护手，持久留香。',
    parameters: { '香型': '薰衣草', '净含量': '2kg/瓶', '保质期': '3年' },
    rating: 4.7,
    reviews: 1567
  },
  {
    id: 12,
    name: '防晒霜SPF50+ 清爽不油腻',
    images: ['https://picsum.photos/400/400?random=23', 'https://picsum.photos/400/400?random=24'],
    originalPrice: 139,
    currentPrice: 89,
    stock: 234,
    sales: 3456,
    category: '美妆个护',
    subCategory: '防晒',
    tags: ['特惠', '热销'],
    specs: [
      { name: '规格', options: ['50ml', '100ml'] }
    ],
    description: '高倍防晒，清爽透气，防水防汗，适合户外。',
    parameters: { '防晒指数': 'SPF50+ PA+++', '质地': '乳液', '适用肤质': '所有肤质' },
    rating: 4.8,
    reviews: 892
  }
];

// 分类数据
const categoriesData = [
  {
    id: 1,
    name: '家居日用',
    icon: '🏠',
    subCategories: ['厨房用品', '收纳整理', '清洁用品', '灯具', '家纺', '装饰摆件']
  },
  {
    id: 2,
    name: '美妆个护',
    icon: '💄',
    subCategories: ['面膜', '防晒', '护肤套装', '彩妆', '洗护用品', '香水']
  },
  {
    id: 3,
    name: '食品零食',
    icon: '🍪',
    subCategories: ['坚果', '糖果巧克力', '饼干糕点', '饮料', '水果干', '地方特产']
  },
  {
    id: 4,
    name: '数码配件',
    icon: '📱',
    subCategories: ['耳机', '智能穿戴', '手机配件', '电脑配件', '充电设备', '存储设备']
  },
  {
    id: 5,
    name: '服饰鞋包',
    icon: '👔',
    subCategories: ['男装', '女装', '运动装', '鞋子', '箱包', '配饰']
  },
  {
    id: 6,
    name: '运动户外',
    icon: '⚽',
    subCategories: ['运动鞋', '运动服', '健身器材', '户外装备', '球类运动', '骑行装备']
  }
];

// 用户数据
let userData = {
  isLoggedIn: false,
  info: null,
  cart: [],
  orders: [],
  addresses: [],
  favorites: []
};

// ==================== 工具函数 ====================

const Utils = {
  // 格式化价格
  formatPrice(price) {
    return '¥' + price.toFixed(2);
  },

  // 生成唯一ID
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  },

  // 获取URL参数
  getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  },

  // 设置URL参数
  setUrlParam(name, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(name, value);
    window.history.pushState({}, '', url);
  },

  // 本地存储
  storage: {
    get(key) {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch {
        return null;
      }
    },
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    remove(key) {
      localStorage.removeItem(key);
    }
  },

  // 防抖
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // 节流
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // 高亮关键词
  highlightKeyword(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  },

  // 手机号脱敏
  maskPhone(phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  }
};

// ==================== 弹窗组件 ====================

const Modal = {
  // 显示弹窗
  show(options) {
    const { title, content, buttons, width = 400 } = options;

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.innerHTML = `
      <div class="modal" style="width: ${width}px">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
          <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body">${content}</div>
        <div class="modal-footer">
          ${buttons ? buttons.map(btn => `
            <button class="btn ${btn.type || 'btn-outline'}" data-action="${btn.action}">${btn.text}</button>
          `).join('') : ''}
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // 绑定事件
    overlay.querySelector('.modal-close').onclick = () => this.hide(overlay);
    overlay.onclick = (e) => {
      if (e.target === overlay) this.hide(overlay);
    };

    buttons?.forEach(btn => {
      const btnEl = overlay.querySelector(`[data-action="${btn.action}"]`);
      if (btnEl && btn.onClick) {
        btnEl.onclick = () => {
          btn.onClick();
          if (btn.closeOnClick !== false) this.hide(overlay);
        };
      }
    });

    return overlay;
  },

  // 隐藏弹窗
  hide(overlay) {
    if (overlay) {
      overlay.classList.remove('active');
      setTimeout(() => overlay.remove(), 300);
    }
  },

  // 确认弹窗
  confirm(message, onConfirm, onCancel) {
    return this.show({
      title: '提示',
      content: `<p style="text-align: center; font-size: 15px;">${message}</p>`,
      buttons: [
        { text: '取消', action: 'cancel', onClick: onCancel },
        { text: '确认', action: 'confirm', type: 'btn-primary', onClick: onConfirm }
      ]
    });
  },

  // 提示弹窗
  alert(message, type = 'info') {
    const icons = {
      success: '✓',
      error: '✕',
      warning: '!',
      info: 'i'
    };
    return this.show({
      title: '提示',
      content: `
        <div class="text-center">
          <div style="font-size: 48px; margin-bottom: 15px;">${icons[type] || icons.info}</div>
          <p style="font-size: 15px;">${message}</p>
        </div>
      `,
      buttons: [
        { text: '我知道了', action: 'ok', type: 'btn-primary' }
      ]
    });
  }
};

// ==================== 用户状态管理 ====================

const User = {
  // 检查登录状态
  checkLogin() {
    const savedUser = Utils.storage.get('userData');
    if (savedUser) {
      userData = savedUser;
    }
    return userData.isLoggedIn;
  },

  // 登录
  login(userInfo) {
    userData.isLoggedIn = true;
    userData.info = userInfo;
    // 合并临时购物车
    const tempCart = Utils.storage.get('tempCart') || [];
    userData.cart = [...userData.cart, ...tempCart];
    Utils.storage.remove('tempCart');
    this.save();
  },

  // 登出
  logout() {
    userData = {
      isLoggedIn: false,
      info: null,
      cart: [],
      orders: [],
      addresses: [],
      favorites: []
    };
    this.save();
  },

  // 保存用户数据
  save() {
    Utils.storage.set('userData', userData);
  },

  // 更新导航栏显示
  updateNavbar() {
    const authButtons = document.querySelector('.auth-buttons');
    const userArea = document.querySelector('.navbar-user');
    const cartBadge = document.querySelector('.cart-badge');

    if (authButtons && userArea) {
      if (userData.isLoggedIn) {
        authButtons.style.display = 'none';
        userArea.style.display = 'flex';
        const usernameEl = userArea.querySelector('.username');
        if (usernameEl) {
          usernameEl.textContent = userData.info?.nickname || '用户';
        }
      } else {
        authButtons.style.display = 'flex';
        userArea.style.display = 'none';
      }
    }

    if (cartBadge) {
      const count = this.getCartCount();
      cartBadge.textContent = count;
      cartBadge.style.display = count > 0 ? 'flex' : 'none';
    }
  },

  // 获取购物车数量
  getCartCount() {
    return userData.cart.reduce((sum, item) => sum + item.quantity, 0);
  },

  // 添加到购物车
  addToCart(product, quantity = 1, specs = {}) {
    const cartItem = {
      id: Utils.generateId(),
      productId: product.id,
      name: product.name,
      image: product.images[0],
      price: product.currentPrice,
      quantity,
      specs,
      stock: product.stock
    };

    if (this.checkLogin()) {
      // 检查是否已存在相同商品
      const existIndex = userData.cart.findIndex(item =>
        item.productId === product.id &&
        JSON.stringify(item.specs) === JSON.stringify(specs)
      );
      if (existIndex > -1) {
        userData.cart[existIndex].quantity += quantity;
      } else {
        userData.cart.push(cartItem);
      }
      this.save();
    } else {
      // 临时购物车
      let tempCart = Utils.storage.get('tempCart') || [];
      const existIndex = tempCart.findIndex(item =>
        item.productId === product.id &&
        JSON.stringify(item.specs) === JSON.stringify(specs)
      );
      if (existIndex > -1) {
        tempCart[existIndex].quantity += quantity;
      } else {
        tempCart.push(cartItem);
      }
      Utils.storage.set('tempCart', tempCart);
    }

    this.updateNavbar();
  }
};

// ==================== 购物车管理 ====================

const Cart = {
  // 获取购物车数据
  get() {
    if (User.checkLogin()) {
      return userData.cart;
    }
    return Utils.storage.get('tempCart') || [];
  },

  // 更新数量
  updateQuantity(itemId, quantity) {
    const cart = this.get();
    const item = cart.find(i => i.id === itemId);
    if (item) {
      item.quantity = Math.max(1, Math.min(quantity, item.stock));
      if (User.checkLogin()) {
        User.save();
      } else {
        Utils.storage.set('tempCart', cart);
      }
    }
  },

  // 删除商品
  remove(itemId) {
    if (User.checkLogin()) {
      userData.cart = userData.cart.filter(i => i.id !== itemId);
      User.save();
    } else {
      let tempCart = Utils.storage.get('tempCart') || [];
      tempCart = tempCart.filter(i => i.id !== itemId);
      Utils.storage.set('tempCart', tempCart);
    }
    User.updateNavbar();
  },

  // 清空购物车
  clear() {
    if (User.checkLogin()) {
      userData.cart = [];
      User.save();
    } else {
      Utils.storage.set('tempCart', []);
    }
    User.updateNavbar();
  },

  // 计算总价
  calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
};

// ==================== 搜索功能 ====================

const Search = {
  // 搜索商品
  search(keyword) {
    if (!keyword) return productsData;
    const lowerKeyword = keyword.toLowerCase();
    return productsData.filter(product =>
      product.name.toLowerCase().includes(lowerKeyword) ||
      product.category.toLowerCase().includes(lowerKeyword) ||
      product.subCategory.toLowerCase().includes(lowerKeyword)
    );
  },

  // 按分类筛选
  filterByCategory(category, subCategory) {
    return productsData.filter(product => {
      if (category && product.category !== category) return false;
      if (subCategory && product.subCategory !== subCategory) return false;
      return true;
    });
  },

  // 多条件筛选
  filter(products, conditions) {
    return products.filter(product => {
      // 价格区间
      if (conditions.minPrice !== undefined && product.currentPrice < conditions.minPrice) return false;
      if (conditions.maxPrice !== undefined && product.currentPrice > conditions.maxPrice) return false;

      // 库存
      if (conditions.inStock && product.stock <= 0) return false;

      // 其他条件
      if (conditions.freeShipping && !product.freeShipping) return false;
      if (conditions.isNew && !product.tags.includes('新品')) return false;
      if (conditions.isSale && !product.tags.includes('特惠')) return false;

      return true;
    });
  },

  // 排序
  sort(products, sortBy) {
    const sorted = [...products];
    switch (sortBy) {
      case 'sales':
        return sorted.sort((a, b) => b.sales - a.sales);
      case 'priceAsc':
        return sorted.sort((a, b) => a.currentPrice - b.currentPrice);
      case 'priceDesc':
        return sorted.sort((a, b) => b.currentPrice - a.currentPrice);
      default:
        return sorted;
    }
  }
};

// ==================== 初始化 ====================

document.addEventListener('DOMContentLoaded', function() {
  // 检查登录状态
  User.checkLogin();
  User.updateNavbar();

  // 绑定全局事件
  bindGlobalEvents();
});

function bindGlobalEvents() {
  // 搜索框事件
  const searchInput = document.querySelector('.navbar-search input');
  const searchIcon = document.querySelector('.navbar-search .search-icon');

  if (searchInput && searchIcon) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const keyword = searchInput.value.trim();
        if (keyword) {
          window.location.href = `search.html?keyword=${encodeURIComponent(keyword)}`;
        }
      }
    });

    searchIcon.addEventListener('click', () => {
      const keyword = searchInput.value.trim();
      if (keyword) {
        window.location.href = `search.html?keyword=${encodeURIComponent(keyword)}`;
      }
    });
  }

  // 登录按钮
  const loginBtn = document.querySelector('.btn-login');
  if (loginBtn) {
    loginBtn.addEventListener('click', showLoginModal);
  }

  // 注册按钮
  const registerBtn = document.querySelector('.btn-register');
  if (registerBtn) {
    registerBtn.addEventListener('click', showRegisterModal);
  }

  // 购物车跳转
  const cartIcon = document.querySelector('.navbar-cart');
  if (cartIcon) {
    cartIcon.addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  }
}

// 显示登录弹窗
function showLoginModal() {
  Modal.show({
    title: '登录',
    content: `
      <div class="tabs" id="loginTabs">
        <div class="tab-item active" data-tab="phone">手机号登录</div>
        <div class="tab-item" data-tab="account">账号密码登录</div>
      </div>
      <div class="tab-content active" id="phoneTab">
        <div class="form-group">
          <input type="text" class="form-input" id="loginPhone" placeholder="请输入手机号">
        </div>
        <div class="form-group" style="display: flex; gap: 10px;">
          <input type="text" class="form-input" id="loginCode" placeholder="请输入验证码" style="flex: 1;">
          <button class="btn btn-outline" id="sendCodeBtn">获取验证码</button>
        </div>
      </div>
      <div class="tab-content" id="accountTab">
        <div class="form-group">
          <input type="text" class="form-input" id="loginAccount" placeholder="请输入账号">
        </div>
        <div class="form-group">
          <input type="password" class="form-input" id="loginPassword" placeholder="请输入密码">
        </div>
      </div>
    `,
    width: 420,
    buttons: [
      { text: '取消', action: 'cancel' },
      {
        text: '登录',
        action: 'login',
        type: 'btn-primary',
        onClick: () => {
          // 模拟登录成功
          User.login({
            id: Utils.generateId(),
            nickname: '有郝物用户',
            phone: '138****8888'
          });
          User.updateNavbar();
          Modal.alert('登录成功！', 'success');
        }
      }
    ]
  });

  // 标签页切换
  const tabs = document.querySelectorAll('#loginTabs .tab-item');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(tab.dataset.tab + 'Tab').classList.add('active');
    });
  });

  // 发送验证码
  const sendCodeBtn = document.getElementById('sendCodeBtn');
  if (sendCodeBtn) {
    sendCodeBtn.addEventListener('click', () => {
      let countdown = 60;
      sendCodeBtn.disabled = true;
      sendCodeBtn.textContent = `${countdown}s`;
      const timer = setInterval(() => {
        countdown--;
        sendCodeBtn.textContent = `${countdown}s`;
        if (countdown <= 0) {
          clearInterval(timer);
          sendCodeBtn.disabled = false;
          sendCodeBtn.textContent = '获取验证码';
        }
      }, 1000);
    });
  }
}

// 显示注册弹窗
function showRegisterModal() {
  Modal.show({
    title: '注册',
    content: `
      <div class="form-group">
        <input type="text" class="form-input" placeholder="请输入手机号">
      </div>
      <div class="form-group" style="display: flex; gap: 10px;">
        <input type="text" class="form-input" placeholder="请输入验证码" style="flex: 1;">
        <button class="btn btn-outline">获取验证码</button>
      </div>
      <div class="form-group">
        <input type="password" class="form-input" placeholder="请设置密码（6-20位）">
      </div>
      <div class="form-group">
        <input type="password" class="form-input" placeholder="请再次输入密码">
      </div>
    `,
    width: 420,
    buttons: [
      { text: '取消', action: 'cancel' },
      { text: '注册', action: 'register', type: 'btn-primary' }
    ]
  });
}

// 导出全局对象
window.Utils = Utils;
window.Modal = Modal;
window.User = User;
window.Cart = Cart;
window.Search = Search;
window.productsData = productsData;
window.categoriesData = categoriesData;
