// 获取Canvas元素和上下文
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// 设置Canvas背景颜色为绿色
ctx.fillStyle = '#A8D08D'; // 绿色背景色
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 设置笑脸的中心坐标
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var faceRadius = 250; // 笑脸半径（原来的5倍）

// 绘制圆形脸部
ctx.beginPath();
ctx.arc(centerX, centerY, faceRadius, 0, Math.PI * 2, true); // 圆心在(centerX, centerY)
ctx.fillStyle = 'yellow'; // 填充颜色为黄色
ctx.fill(); // 填充圆形
ctx.stroke(); // 描边

// 绘制眼睛
var eyeOffsetX = 75; // 眼睛距离脸中心的水平距离（原来的5倍）
var eyeOffsetY = 75; // 眼睛距离脸中心的垂直距离（原来的5倍）
var eyeRadius = 15; // 眼睛半径（原来的5倍）

ctx.beginPath();
ctx.arc(centerX - eyeOffsetX, centerY - eyeOffsetY, eyeRadius, 0, Math.PI * 2, true);  // 左眼
ctx.arc(centerX + eyeOffsetX, centerY - eyeOffsetY, eyeRadius, 0, Math.PI * 2, true); // 右眼
ctx.fillStyle = 'black'; // 填充颜色为黑色
ctx.fill(); // 填充眼睛

// 绘制鼻子
ctx.beginPath();
ctx.moveTo(centerX, centerY - 20); // 鼻子起点（放大后的尺寸）
ctx.lineTo(centerX, centerY + 30); // 鼻子终点（放大后的尺寸）
ctx.stroke(); // 描边

// 绘制笑脸
ctx.beginPath();
ctx.arc(centerX, centerY + 50, 120, 0, Math.PI, false); // 笑脸弧线（放大后的尺寸）
ctx.stroke(); // 描边

// 添加文本
ctx.font = '24px Arial'; // 设置字体大小和样式
ctx.fillStyle = 'green'; // 设置文本颜色为绿色
ctx.fillText('The Canvas brought me to life!', centerX - 180, centerY + 350); // 在笑脸下方绘制文本
