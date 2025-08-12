#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新拉链产品页面的图片路径，使用新的图片名称
"""

def update_zipper_images():
    """更新拉链产品页面的图片路径"""
    filename = 'zipper-products.html'
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 更新图片路径映射
    image_mappings = [
        # 修复现有的图片路径
        ('zipper1.jpg', 'zipper (1).jpg'),
        ('zipper2.jpg', 'zipper (2).jpg'),
        ('zipper3.jpg', 'zipper (3).jpg'),
        ('zipper4.jpg', 'zipper (4).jpg'),
        ('zipper5.png', 'zipper (5).jpg'),
        ('zipper6.png', 'zipper (6).jpg'),
        ('zipper8.png', 'zipper (8).jpg'),
        ('zipper9.png', 'zipper (9).jpg'),
        ('zipper10.png', 'zipper (10).jpg'),
        ('zipper11.png', 'zipper (11).jpg'),
        ('zipper12.png', 'zipper (12).jpg'),
        ('zipper13.png', 'zipper (13).jpg'),
        ('zipper14.png', 'zipper (14).jpg'),
        ('zipper15.png', 'zipper (15).jpg'),
        ('zipper16.png', 'zipper (16).jpg'),
        ('zipper17.png', 'zipper (17).jpg'),
        ('zipper18.png', 'zipper (18).jpg'),
        ('zipper2.png', 'zipper (2).jpg'),
        ('zipper3.png', 'zipper (3).jpg'),
        ('zipper4.png', 'zipper (4).jpg'),
    ]
    
    # 应用图片路径更新
    for old_path, new_path in image_mappings:
        content = content.replace(f'src="拉链素材/{old_path}"', f'src="拉链素材/{new_path}"')
    
    # 移除不存在的图片产品
    # 删除产品19-38，因为实际只有19个图片文件
    content = content.replace('''                <div class="gallery-item">
                    <img src="拉链素材/zipper (19).jpg" alt="拉链产品23" onclick="openModal(this.src, '拉链 - 23', 'Zipper - 23')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 23" data-lang-en="Zipper - 23">拉链 - 23</h3>
                        <p data-lang-zh="优质拉链，手感舒适" data-lang-en="Quality zipper, comfortable feel">优质拉链，手感舒适</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (20).jpg" alt="拉链产品24" onclick="openModal(this.src, '拉链 - 24', 'Zipper - 24')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 24" data-lang-en="Zipper - 24">拉链 - 24</h3>
                        <p data-lang-zh="专业拉链，应用广泛" data-lang-en="Professional zipper, wide application">专业拉链，应用广泛</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (21).jpg" alt="拉链产品25" onclick="openModal(this.src, '拉链 - 25', 'Zipper - 25')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 25" data-lang-en="Zipper - 25">拉链 - 25</h3>
                        <p data-lang-zh="高密度拉链，品质卓越" data-lang-en="High-density zipper, excellent quality">高密度拉链，品质卓越</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (22).jpg" alt="拉链产品26" onclick="openModal(this.src, '拉链 - 26', 'Zipper - 26')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 26" data-lang-en="Zipper - 26">拉链 - 26</h3>
                        <p data-lang-zh="优质拉链，性价比高" data-lang-en="Quality zipper, high cost-performance">优质拉链，性价比高</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (23).jpg" alt="拉链产品27" onclick="openModal(this.src, '拉链 - 27', 'Zipper - 27')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 27" data-lang-en="Zipper - 27">拉链 - 27</h3>
                        <p data-lang-zh="高端拉链，品质保证" data-lang-en="High-end zipper, quality guaranteed">高端拉链，品质保证</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (24).jpg" alt="拉链产品28" onclick="openModal(this.src, '拉链 - 28', 'Zipper - 28')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 28" data-lang-en="Zipper - 28">拉链 - 28</h3>
                        <p data-lang-zh="专业拉链，满足各种需求" data-lang-en="Professional zipper, meets various needs">专业拉链，满足各种需求</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (25).jpg" alt="拉链产品29" onclick="openModal(this.src, '拉链 - 29', 'Zipper - 29')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 29" data-lang-en="Zipper - 29">拉链 - 29</h3>
                        <p data-lang-zh="精密拉链，工艺精湛" data-lang-en="Precision zipper, exquisite craftsmanship">精密拉链，工艺精湛</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (26).jpg" alt="拉链产品30" onclick="openModal(this.src, '拉链 - 30', 'Zipper - 30')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 30" data-lang-en="Zipper - 30">拉链 - 30</h3>
                        <p data-lang-zh="优质拉链，手感舒适" data-lang-en="Quality zipper, comfortable feel">优质拉链，手感舒适</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (27).jpg" alt="拉链产品31" onclick="openModal(this.src, '拉链 - 31', 'Zipper - 31')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 31" data-lang-en="Zipper - 31">拉链 - 31</h3>
                        <p data-lang-zh="专业拉链，应用广泛" data-lang-en="Professional zipper, wide application">专业拉链，应用广泛</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (28).jpg" alt="拉链产品32" onclick="openModal(this.src, '拉链 - 32', 'Zipper - 32')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 32" data-lang-en="Zipper - 32">拉链 - 32</h3>
                        <p data-lang-zh="高密度拉链，品质卓越" data-lang-en="High-density zipper, excellent quality">高密度拉链，品质卓越</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (29).jpg" alt="拉链产品33" onclick="openModal(this.src, '拉链 - 33', 'Zipper - 33')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 33" data-lang-en="Zipper - 33">拉链 - 33</h3>
                        <p data-lang-zh="优质拉链，性价比高" data-lang-en="Quality zipper, high cost-performance">优质拉链，性价比高</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (30).jpg" alt="拉链产品34" onclick="openModal(this.src, '拉链 - 34', 'Zipper - 34')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 34" data-lang-en="Zipper - 34">拉链 - 34</h3>
                        <p data-lang-zh="高端拉链，品质保证" data-lang-en="High-end zipper, quality guaranteed">高端拉链，品质保证</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (31).jpg" alt="拉链产品35" onclick="openModal(this.src, '拉链 - 35', 'Zipper - 35')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 35" data-lang-en="Zipper - 35">拉链 - 35</h3>
                        <p data-lang-zh="专业拉链，满足各种需求" data-lang-en="Professional zipper, meets various needs">专业拉链，满足各种需求</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (32).jpg" alt="拉链产品36" onclick="openModal(this.src, '拉链 - 36', 'Zipper - 36')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 36" data-lang-en="Zipper - 36">拉链 - 36</h3>
                        <p data-lang-zh="精密拉链，工艺精湛" data-lang-en="Precision zipper, exquisite craftsmanship">精密拉链，工艺精湛</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (33).jpg" alt="拉链产品37" onclick="openModal(this.src, '拉链 - 37', 'Zipper - 37')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 37" data-lang-en="Zipper - 37">拉链 - 37</h3>
                        <p data-lang-zh="优质拉链，手感舒适" data-lang-en="Quality zipper, comfortable feel">优质拉链，手感舒适</p>
                    </div>
                </div>
                
                <div class="gallery-item">
                    <img src="拉链素材/zipper (34).jpg" alt="拉链产品38" onclick="openModal(this.src, '拉链 - 38', 'Zipper - 38')">
                    <div class="gallery-item-info">
                        <h3 data-lang-zh="拉链 - 38" data-lang-en="Zipper - 38">拉链 - 38</h3>
                        <p data-lang-zh="专业拉链，应用广泛" data-lang-en="Professional zipper, wide application">专业拉链，应用广泛</p>
                    </div>
                </div>''', '')
    
    # 写回文件
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"完成更新: {filename}")

if __name__ == "__main__":
    update_zipper_images() 