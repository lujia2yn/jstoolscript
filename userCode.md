*用户代码片段：*

```js
{
	"基于express服务器基本配置": {
		// "scope": "javascript,typescript",
		"prefix": "express",
		"body": [
			"const { json } = require('express');",
			"const express = require('express');",
			"const app = express();",
			"app.get('/json-sever', (request, response) => {",
			"    const data = (data)",
			"    response.setHeader('Access-Control-Allow-Origin','*');",
			"    response.send(data);",
			"});",
			"app.listen(9000, () => {",
			"   console.log('9000端口开启成功！');",
			"});"
		],
		"description": "基于express服务器基本配置"
	},
	"Mvvm结构": {
		// "scope": "javascript,typescript",
		"prefix": "v2",
		"body": [
			"new Vue({",
			"    el:'',",
			"    data:{",
			"",
			"    },",
			"    methods:{",
			"",
			"    }",
			"})"
		],
		"description": "Mvvm结构"
	},
	"forEach": {
		// "scope": "javascript,typescript",
		"prefix": "fe",
		"body": [
			"forEach((item, index)=>{",
			"",
			"})"
		],
		"description": "forEach遍历"
	},
	"获取document元素封装(1)": {
		// "scope": "javascript,typescript",
		"prefix": "$",
		"body": [
			"function $(obj, flag) {",
			"    return flag == true ? [...document.querySelectorAll(obj)] : document.querySelector(obj);",
			"}"
		],
		"description": "获取document元素封装"
	},
	"获取document元素封装(2)": {
		// "scope": "javascript,typescript",
		"prefix": "$1",
		"body": [
			"let $ = (obj, flag) => flag == true ? [...document.querySelectorAll(obj)] : document.querySelector(obj);"
		],
		"description": "获取document元素封装"
	},
	"$('')": {
		// "scope": "javascript,typescript",
		"prefix": "d",
		"body": [
			"$('')"
		],
		"description": "获取document元素封装"
	},
	"控制台打印": {
		// "scope": "javascript,typescript",
		"prefix": "l",
		"body": [
			"console.log();"
		],
		"description": "控制台打印"
	},
	"获取html元素（方法一）": {
		// "scope": "javascript,typescript",
		"prefix": "qs",
		"body": [
			"document.querySelector('')"
		],
		"description": "获取html元素（方法一）"
	},
	"获取html元素（方法二）": {
		// "scope": "javascript,typescript",
		"prefix": "qss",
		"body": [
			"document.querySelectorAll('')"
		],
		"description": "获取html元素（方法二）"
	}
}

```
