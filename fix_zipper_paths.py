#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修复拉链产品页面的图片路径
"""

def fix_zipper_paths():
    """修复拉链产品页面的图片路径"""
    filename = 'zipper-products.html'
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 修复图片路径
    replacements = [
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
    
    for old, new in replacements:
        content = content.replace(f'src="拉链素材/{old}"', f'src="拉链素材/{new}"')
    
    # 写回文件
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"完成修复: {filename}")

if __name__ == "__main__":
    fix_zipper_paths() 