'use strict';

var pagination = require('hexo-pagination');

module.exports = function(locals) {
  var config = this.config;
  var posts = locals.posts.sort(config.index_generator.order_by);
  //添加按sticky排序，sticky在next主题中存在样式
  posts.data = posts.data.sort(function(a, b) {
    if(a.sticky && b.sticky) {
        if(a.sticky == b.sticky) return 0;
        else return b.sticky - a.sticky;
    }
    else if(a.sticky && !b.sticky) {
        return -1;
    }
    else if(!a.sticky && b.sticky) {
        return 1;
    }
    else return 0;
});


  var paginationDir = config.pagination_dir || 'page';
  var path = config.index_generator.path || '';

  return pagination(path, posts, {
    perPage: config.index_generator.per_page,
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
