# hexo-generator-index-sticky

## 增加置顶功能

USAGE

在文章的开头设置中增加一个`sticky`参数用来置顶，数字越大越高

```markdown
---
title: example
sticky: 100
---
```

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
