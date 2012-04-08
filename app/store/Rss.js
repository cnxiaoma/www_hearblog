Ext.define('HearBlog.store.Rss', {
  extend  : 'Ext.data.Store',
  model   : 'HearBlog.model.RssModel',
  requires: [
    'HearBlog.model.RssModel'
  ]
});
