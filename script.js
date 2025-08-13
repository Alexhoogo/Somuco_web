// 语言切换功能
let currentLang = localStorage.getItem('currentLang') || 'en';

function switchLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('currentLang', currentLang);
    updateLanguage();
}

function updateLanguage() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'zh' ? 'EN' : '中文';
    }
    
    // 更新页面标题
    updatePageTitle();
    
    // 更新所有带有data-lang属性的元素
    const elements = document.querySelectorAll('[data-lang-zh][data-lang-en]');
    elements.forEach(element => {
        const text = currentLang === 'zh' ? element.getAttribute('data-lang-zh') : element.getAttribute('data-lang-en');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    });
}

function updatePageTitle() {
    const titleElement = document.querySelector('title');
    if (titleElement) {
        const currentTitle = titleElement.textContent;
        const newTitle = getTranslatedTitle(currentTitle);
        titleElement.textContent = newTitle;
    }
}

function getTranslatedTitle(currentTitle) {
    const titleMappings = {
        // 主页
        'Dongguan Somuco Trading Co., Ltd. - Professional Bag and Shoe Material Accessories Supplier': {
            zh: '东莞索慕克贸易有限公司 - 专业的箱包鞋材辅料产品供应商',
            en: 'Dongguan Somuco Trading Co., Ltd. - Professional Bag and Shoe Material Accessories Supplier'
        },
        // 产品分类页面
        '产品分类 - 东莞索慕克贸易有限公司': {
            zh: '产品分类 - 东莞索慕克贸易有限公司',
            en: 'Product Categories - Dongguan Somuco Trading Co., Ltd.'
        },
        // 关于我们
        '关于我们 - 东莞索慕克贸易有限公司': {
            zh: '关于我们 - 东莞索慕克贸易有限公司',
            en: 'About Us - Dongguan Somuco Trading Co., Ltd.'
        },
        // 联系我们
        '联系我们 - 东莞索慕克贸易有限公司': {
            zh: '联系我们 - 东莞索慕克贸易有限公司',
            en: 'Contact Us - Dongguan Somuco Trading Co., Ltd.'
        },
        // 产品页面
        '超纤产品 - 东莞索慕克贸易有限公司': {
            zh: '超纤产品 - 东莞索慕克贸易有限公司',
            en: 'Microfiber Products - Dongguan Somuco Trading Co., Ltd.'
        },
        '尼龙产品 - 东莞索慕克贸易有限公司': {
            zh: '尼龙产品 - 东莞索慕克贸易有限公司',
            en: 'Nylon Products - Dongguan Somuco Trading Co., Ltd.'
        },
        '皮糠纸产品 - 东莞索慕克贸易有限公司': {
            zh: '皮糠纸产品 - 东莞索慕克贸易有限公司',
            en: 'Bonded Leather Products - Dongguan Somuco Trading Co., Ltd.'
        },
        '不织布产品 - 东莞索慕克贸易有限公司': {
            zh: '不织布产品 - 东莞索慕克贸易有限公司',
            en: 'Non-woven Products - Dongguan Somuco Trading Co., Ltd.'
        },
        '编织产品 - 东莞索慕克贸易有限公司': {
            zh: '编织产品 - 东莞索慕克贸易有限公司',
            en: 'Raffia Fabric Products - Dongguan Somuco Trading Co., Ltd.'
        },
        'PU产品 - 东莞索慕克贸易有限公司': {
            zh: 'PU产品 - 东莞索慕克贸易有限公司',
            en: 'PU Products - Dongguan Somuco Trading Co., Ltd.'
        },
        '拉链产品 - 东莞索慕克贸易有限公司': {
            zh: '拉链产品 - 东莞索慕克贸易有限公司',
            en: 'Zipper Products - Dongguan Somuco Trading Co., Ltd.'
        },
        '珠链产品 - SOHO外贸产品供应商': {
            zh: '珠链产品 - 东莞索慕克贸易有限公司',
            en: 'Ball Chain Products - Dongguan Somuco Trading Co., Ltd.'
        },
        '饰品产品 - SOHO外贸产品供应商': {
            zh: '饰品产品 - 东莞索慕克贸易有限公司',
            en: 'Accessories Products - Dongguan Somuco Trading Co., Ltd.'
        }
    };
    
    const mapping = titleMappings[currentTitle];
    if (mapping) {
        return mapping[currentLang];
    }
    
    return currentTitle; // 如果没有找到映射，返回原标题
}

// 主页轮播图功能
class HeroCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelector('.hero-dots');
        this.prevBtn = document.querySelector('.hero-prev');
        this.nextBtn = document.querySelector('.hero-next');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        this.createDots();
        this.bindEvents();
        this.startAutoPlay();
    }
    
    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'hero-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dots.appendChild(dot);
        });
    }
    
    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.dots.children[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        this.dots.children[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }
    
    bindEvents() {
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
}

// 图片模态框功能
class ImageModal {
    constructor() {
        this.modal = document.getElementById('imageModal');
        this.modalImg = document.getElementById('modalImage');
        this.closeBtn = document.querySelector('.close');
        this.prevBtn = document.querySelector('.modal-prev');
        this.nextBtn = document.querySelector('.modal-next');
        this.currentImageIndex = 0;
        this.images = [];
        
        this.init();
    }
    
    init() {
        // 收集所有可点击的图片
        this.collectImages();
        
        // 只为产品页面图片添加点击事件
        document.querySelectorAll('.gallery-item img').forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                this.currentImageIndex = this.images.findIndex(imgData => imgData.src === img.src);
                this.openModal(img.src, img.alt);
            });
        });
        
        // 关闭模态框事件
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
        
        // 左右箭头导航
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevImage());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextImage());
        }
        
        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
            if (e.key === 'ArrowLeft') this.prevImage();
            if (e.key === 'ArrowRight') this.nextImage();
        });
    }
    
    collectImages() {
        // 只收集产品页面图片
        document.querySelectorAll('.gallery-item img').forEach(img => {
            this.images.push({
                src: img.src,
                alt: img.alt
            });
        });
    }
    
    openModal(src, alt) {
        this.modalImg.src = src;
        this.modalImg.alt = alt;
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        this.updateNavigationButtons();
    }
    
    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    prevImage() {
        if (this.images.length > 1) {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
            const imgData = this.images[this.currentImageIndex];
            this.modalImg.src = imgData.src;
            this.modalImg.alt = imgData.alt;
            this.updateNavigationButtons();
        }
    }
    
    nextImage() {
        if (this.images.length > 1) {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            const imgData = this.images[this.currentImageIndex];
            this.modalImg.src = imgData.src;
            this.modalImg.alt = imgData.alt;
            this.updateNavigationButtons();
        }
    }
    
    updateNavigationButtons() {
        if (this.prevBtn && this.nextBtn) {
            this.prevBtn.style.display = this.images.length > 1 ? 'block' : 'none';
            this.nextBtn.style.display = this.images.length > 1 ? 'block' : 'none';
        }
    }
}

// 初始化语言切换按钮
document.addEventListener('DOMContentLoaded', () => {
    // 应用保存的语言设置
    updateLanguage();
    
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', switchLanguage);
    }
    

    
    // 初始化主页轮播图
    if (document.querySelector('.hero-carousel')) {
        new HeroCarousel();
    }
    
    // 初始化图片模态框
    new ImageModal();
});

// 导航菜单切换
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 轮播图功能
class Carousel {
    constructor() {
        this.container = document.querySelector('.carousel-container');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        this.dotsContainer = document.querySelector('.carousel-dots');
        
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        this.createDots();
        this.updateDots();
        this.bindEvents();
        this.startAutoPlay();
    }
    
    createDots() {
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.container.style.transform = `translateX(-${index * 100}%)`;
        this.updateDots();
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slideCount;
        this.goToSlide(this.currentSlide);
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.goToSlide(this.currentSlide);
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
            this.restartAutoPlay();
        });
        
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
            this.restartAutoPlay();
        });
        
        // 鼠标悬停时暂停自动播放
        this.container.addEventListener('mouseenter', () => {
            this.stopAutoPlay();
        });
        
        this.container.addEventListener('mouseleave', () => {
            this.startAutoPlay();
        });
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    restartAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// 初始化轮播图
const carousel = new Carousel();

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="主题"]').value;
        const message = this.querySelector('textarea').value;
        
        // 简单的表单验证
        if (!name || !email || !message) {
            alert('请填写所有必填字段');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('请输入有效的邮箱地址');
            return;
        }
        
        // 模拟表单提交
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('消息已发送！我们会尽快回复您。');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// 邮箱验证函数
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 产品卡片点击效果
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        // 添加点击动画
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.querySelectorAll('.product-card, .feature, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 图片懒加载
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    if (img.dataset.src) {
        imageObserver.observe(img);
    }
});

// 键盘导航支持
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        carousel.prevSlide();
    } else if (e.key === 'ArrowRight') {
        carousel.nextSlide();
    }
});

// 触摸滑动支持（移动端）
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.carousel').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.carousel').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            carousel.nextSlide();
        } else {
            carousel.prevSlide();
        }
    }
} 