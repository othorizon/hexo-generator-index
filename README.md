# hexo-generator-index-sticky

## 增加置顶功能

参考了文章[解决Hexo博客文章置顶问题](https://www.jianshu.com/p/42a4efcdf8d7)[打造个性超赞博客Hexo+NexT+GithubPages的超深度优化](https://reuixiy.github.io/technology/computer/computer-aided-art/2017/06/09/hexo-next-optimization.html#%E6%96%87%E7%AB%A0%E7%BD%AE%E9%A1%B6),
但是里面的改法去掉了hexo-generator-index的原有的orderby功能，因此自己重新改了一版，使之不会影响原有的功能，在原有的sort排序之后再按照sticky字段做一次sort。
采用sticky关键词是因为这个在next主题中已经定义了置顶样式，因此可以直接拿来使用

---

[![Build Status](https://travis-ci.org/hexojs/hexo-generator-index.svg?branch=master)](https://travis-ci.org/hexojs/hexo-generator-index)  [![NPM version](https://badge.fury.io/js/hexo-generator-index.svg)](http://badge.fury.io/js/hexo-generator-index) [![Coverage Status](https://img.shields.io/coveralls/hexojs/hexo-generator-index.svg)](https://coveralls.io/r/hexojs/hexo-generator-index?branch=master)

Index generator for [Hexo].

## Installation

``` bash
$ npm install hexo-generator-index --save
```

## Options
Add or modify the following section to your root _config.yml file

``` yaml
index_generator:
  path: ''
  per_page: 10
  order_by: -date
```

- **path**: Root path for your blogs index page. (default = '')
- **per_page**: Posts displayed per page. (0 = disable pagination)
- **order_by**: Posts order. (Order by date descending by default)

## License

MIT

[Hexo]: http://hexo.io/
