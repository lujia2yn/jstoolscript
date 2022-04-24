const { json } = require('express');
const express = require('express');
const app = express();
app.get('/json-sever', (request, response) => {
    const data = [
        {
            "id": 101,
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5c752522100ecd364cc53752bb660bc.jpg?thumb=1&w=220&h=220&f=webp&q=90",
            "src1": "https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomicivibfbefe/section1-1.png",
            "price": 2599,
            "mesge1": "「购机可享6期免息；评价晒单前5000名送Xiaomi Civi 马卡龙色系硅胶保护壳；购机享碎屏保、延保5折",
            "mesge2": "轻薄潮流设计 | 丝绒AG工艺 | 原生美肌人像 | 像素级肌肤焕新技术 | 3200万高清质感自拍 | 双柔光灯+自动对焦 | 3D曲面OLED柔性屏 | 120Hz+Dolby Vision | 4500mAh 大电量 | 55W有线闪充 | 立体声双扬声器 | 多功能NFC",
            "intrduce": "Xiaomi Civi",
            "name": "Xiaomi Civi",
            "shoppingImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1632713426.30988142.jpg"
        }
    ];
    // let str = JSON.stringify(data);
    response.setHeader("Access-Control-Allow-Origin","*");
    response.send(data);

    // Access-Control-Allow-Origin
});
app.listen(9000, () => {
    console.log("9000端口开启成功！");
});
