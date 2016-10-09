# react-router-redux-note

> react-router-redux-note

## 技术

- react
- react-router
- redux
- jsx
- fetch
- node

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## react 小结

## 升级日志

### 2016/10/09

1. 添加 `react-addons-pure-render-mixin` 模块

## Bug

### 2016/10/09

1. `npm run dev` 和 `npm run build` 暂不能使用
2. `bindActionCreators` 写错名称
3. `webpack.config.js` 的 'css exclude: /src/' 路径有误, 导致引入css报错
4. 想不通为啥 `constants/actionTypes.js` 里 使用 `keyMirror` 导出对象会读取不到, 而在当前文件却可以读取到, 好奇怪。
