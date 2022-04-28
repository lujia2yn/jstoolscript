*用户代码片段：*

```js
{
	"Print to sever": {
		// "scope": "javascript,typescript",
		"prefix": "sever",
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
		"description": "获取html元素方法的代码片段"
	},
	"Print to console": {
		// "scope": "javascript,typescript",
		"prefix": "v2",
		"body": [
			"new Vue({",
			"    el:'',",
			"    data:{",
			"",
			"    }",
			"})"
		],
		"description": "Log output to console"
	},
	"Print to first": {
		// "scope": "javascript,typescript",
		"prefix": "for1",
		"body": [
			"forEach((item, index)=>{",
			"",
			"})"
		],
		"description": "Log output to console"
	},
	"Print to second-one": {
		// "scope": "javascript,typescript",
		"prefix": "$",
		"body": [
			"function $(obj, flag) {",
			"    return flag == true ? [...document.querySelectorAll(obj)] : document.querySelector(obj);",
			"}"
		],
		"description": "Log output to console"
	},
	"Print to second-two": {
		// "scope": "javascript,typescript",
		"prefix": "$1",
		"body": [
			"let $ = (obj, flag) => flag == true ? [...document.querySelectorAll(obj)] : document.querySelector(obj);"
		],
		"description": "获取html元素方法的代码片段"
	}
}

```
