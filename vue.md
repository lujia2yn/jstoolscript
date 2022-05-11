##### 创建vue脚手架 （vue-cli）

```js
//1.初始化文件
npm init -y

//2.安装vue-cli依赖包
npm i -g @vue/cli

//3.查看vue-cli版本，vue-cli是否安装完成
vue --serve

//4.创建一个vue项目
vue create 项目名称  //（项目名称最好不要使用中文）

//5.运行npm run serve即可启动项目
npm run serve
```

##### 侦听器：

  关键字 watch

```js
//数据（变化后的新值，变化之前的旧值）
//例
userName(newVal,oldVal){
  
}

//默认触发一次
userName:{
   //监听器处理函数
   handler(newVal, oldVal){
	console.log(newVal,oldVal)
   }

   //immediate的作用是：控制监听器是否自动触发一次  (值为布尔值，默认为false)
   immediate:true;

   deep监听对象中的任何一个属性变化  (值为布尔值，默认为false)
   deep: true;



   '对象名.属性名'(newVal){
	console.log(newVal);
    }
}
```

---

##### 计算属性 (computed)

关键字： computed
