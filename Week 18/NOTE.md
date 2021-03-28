学习笔记

对于复用性高的库 单元测试收益非常高

# mocha 

一个测试框架

### 兼容ES6 import语法

安装 `@babel/register` `@babel/core`

`$ npm i --save-dev @babel/register @babel/core`


# nyc 
code coverage 工具  
帮助将测试用例提升覆盖率

`$ npm install --save-dev nyc babel-plugin-istanbul @istanbuljs/nyc-config-babel`

```json
// .nycrc
{
  "extends": "@istanbuljs/nyc-config-babel"
}

// .babelrc
{
  "presets": ["@babel/preset-env"],
  "plugins": ["istanbul"],
  "sourceMaps": "inline"
}
```