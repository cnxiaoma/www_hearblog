Ext.define('HearBlog.model.RssModel', {
  extend: 'Ext.data.Model',

  fields: [
    {name: "id",     type: "string"},
    {name: "title",  type: "string"},
    {name: "detail", type: "string"}
  ],

  proxy: {
    type: 'localstorage',
    id  : 'hearblog'
  }
});

