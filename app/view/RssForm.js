Ext.define('HearBlog.view.RssForm', {
  extend: 'Ext.form.Panel',
  xtype: 'rssform',

  config: {
    items: [
      {
        xtype: 'hiddenfield',
        name: 'id'
      },

      {
        xtype: 'textfield',
        name : 'title',
        label: 'Title'
      },

      {
        xtype: 'textareafield',
        name : 'detail',
        label: 'Detail'
      }
    ]
  }
});
